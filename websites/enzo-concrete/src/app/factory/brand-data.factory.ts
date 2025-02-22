import { BrandData } from "../model/brand-data.model";

export function createtBrandData(): BrandData {
  const companyName = "Enzo Concrete";
  const address = "243 Ferndale Avenue";
  const city = "London";
  const province = "Ontario";
  const postcode = "N6C 5L1";
  const email = "info@enzoconcrete.com";
  const phoneNumber = "+1(519)630-1975";

  return {
    companyName,
    address,
    city,
    province,
    postcode,
    email,
    phoneNumber,
    postalAddress: `${address}, ${city}, ${province}, ${postcode}`,
    shortDescription: `At ${companyName}, we specialize in delivering exceptional concrete solutions throughout ${city}, ${province}.`,
  };
}
