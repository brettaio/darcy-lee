import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Renderer2,
  EmbeddedViewRef,
  createComponent,
  Type,
  EnvironmentInjector,
} from '@angular/core';

// Import your Angular Components
import {
  FooterBrettaioComponent,
  HeaderComponent,
  HeaderBrettaioComponent,
  FooterComponent,
  HeroComponent,
  HeroBrettaioComponent,
} from '../../../../component/src/components';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container p-4">
      <!-- Selection Panel -->
      <div class="selection-panel bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <h2 class="text-lg font-semibold mb-2">Select Components:</h2>

        <!-- Header Selection -->
        <div class="mb-2">
          <span class="font-medium">Header:</span>
          <button (click)="setHeader(HeaderComponent)" class="btn">
            Header 1
          </button>
          <button (click)="setHeader(HeaderBrettaioComponent)" class="btn">
            Header 2
          </button>
        </div>

        <!-- Hero Selection -->
        <div class="mb-2">
          <span class="font-medium">Hero:</span>
          <button (click)="setHero(HeroComponent)" class="btn">Hero 1</button>
          <button (click)="setHero(HeroBrettaioComponent)" class="btn">
            Hero 2
          </button>
        </div>

        <!-- Footer Selection -->
        <div class="mb-4">
          <span class="font-medium">Footer:</span>
          <button (click)="setFooter(FooterComponent)" class="btn">
            Footer 1
          </button>
          <button (click)="setFooter(FooterBrettaioComponent)" class="btn">
            Footer 2
          </button>
        </div>

        <button class="btn btn-primary" (click)="submitSelection()">
          Submit
        </button>
      </div>

      <!-- Resizable iFrame Window -->
      <div
        #resizableContainer
        class="iframe-container relative bg-gray-100 border border-gray-300"
      >
        <iframe
          #previewFrame
          class="w-full h-full overflow-hidden"
          title="Tailwind Preview"
        ></iframe>

        <!-- Resize Handle -->
        <div #resizeHandle class="resize-handle"></div>
      </div>
    </div>
  `,
  // Use your own CSS or see below for an example
  styleUrls: [],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('previewFrame') previewFrame!: ElementRef<HTMLIFrameElement>;
  @ViewChild('resizableContainer') resizableContainer!: ElementRef;
  @ViewChild('resizeHandle') resizeHandle!: ElementRef;

  // For resizing logic
  private isResizing = false;
  private startX = 0;
  private startWidth = 0;

  // Expose your components so the template can reference them (if needed)
  public HeaderComponent = HeaderComponent;
  public HeaderBrettaioComponent = HeaderBrettaioComponent;
  public HeroComponent = HeroComponent;
  public HeroBrettaioComponent = HeroBrettaioComponent;
  public FooterComponent = FooterComponent;
  public FooterBrettaioComponent = FooterBrettaioComponent;

  // Default selections
  public selectedHeader: Type<unknown> = HeaderComponent;
  public selectedHero: Type<unknown> = HeroComponent;
  public selectedFooter: Type<unknown> = FooterComponent;

  constructor(
    private renderer: Renderer2,
    private environmentInjector: EnvironmentInjector,
  ) {}

  ngAfterViewInit() {
    // 1) Render initial selection
    this.updatePreview();

    // 2) Set up resizing logic
    const containerEl = this.resizableContainer.nativeElement;
    const handleEl = this.resizeHandle.nativeElement;

    // On mousedown, start resizing
    this.renderer.listen(handleEl, 'mousedown', (event: MouseEvent) => {
      this.isResizing = true;
      this.startX = event.clientX;
      this.startWidth = containerEl.offsetWidth;
      event.preventDefault();
    });

    // On mousemove, adjust width
    this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
      if (!this.isResizing) return;

      const dx = event.clientX - this.startX;
      let newWidth = this.startWidth + dx;

      if (newWidth < 300) newWidth = 300;
      if (newWidth > window.innerWidth - 50) {
        newWidth = window.innerWidth - 50;
      }
      this.renderer.setStyle(containerEl, 'width', `${newWidth}px`);
    });

    // On mouseup, stop resizing
    this.renderer.listen('window', 'mouseup', () => {
      this.isResizing = false;
    });
  }

  // ========== Dynamic Selection Methods ==========
  public setHeader(component: Type<unknown>) {
    this.selectedHeader = component;
    this.updatePreview();
  }

  public setHero(component: Type<unknown>) {
    this.selectedHero = component;
    this.updatePreview();
  }

  public setFooter(component: Type<unknown>) {
    this.selectedFooter = component;
    this.updatePreview();
  }

  public submitSelection() {
    const summary = `Header: ${this.selectedHeader.name}, Hero: ${this.selectedHero.name}, Footer: ${this.selectedFooter.name}`;
    console.log(summary);
    alert(`Selection Submitted:\n${summary}`);
  }

  // ========== Render the selected components into the iframe ==========
  private updatePreview() {
    // Convert each selected component to HTML
    const headerHTML = this.getComponentHTML(this.selectedHeader);
    const heroHTML = this.getComponentHTML(this.selectedHero);
    const footerHTML = this.getComponentHTML(this.selectedFooter);

    // Combine them
    const finalHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <link rel="stylesheet" href="/websites/bretta-product-viewer/public/tailwind.min.css">
        <style> body { background: #f8f9fa; padding: 20px; } </style>
      </head>
      <body>
        <div class="container mx-auto">
          ${headerHTML}
          ${heroHTML}
          ${footerHTML}
        </div>
      </body>
      </html>
    `;

    // Inject into the iframe
    this.writeToIframe(finalHTML);
  }

  /**
   * Create the Angular component instance using createComponent,
   * run change detection, and extract its rendered HTML.
   */
  private getComponentHTML(componentClass: Type<unknown>): string {
    if (!componentClass) return '';

    // 1) Create a temporary <div>
    const container = document.createElement('div');

    // 2) Dynamically create the component
    const compRef = createComponent(componentClass, {
      environmentInjector: this.environmentInjector,
    });

    // 3) Run change detection so any bindings update
    compRef.changeDetectorRef.detectChanges();

    // 4) Extract the root DOM node
    const rootNode = (compRef.hostView as EmbeddedViewRef<unknown>)
      .rootNodes[0];

    // 5) Append that node to the <div>
    container.appendChild(rootNode);

    // (Optional) If you only need static HTML, you can destroy the component
    // compRef.destroy();

    return container.innerHTML;
  }

  /**
   * Write final HTML to the iframe's document
   */
  private writeToIframe(html: string) {
    const iframeDoc = this.previewFrame.nativeElement.contentDocument;
    if (!iframeDoc) return;

    iframeDoc.open();
    iframeDoc.write(html);
    iframeDoc.close();
  }
}
