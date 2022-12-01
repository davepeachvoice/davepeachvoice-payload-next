import CloudinaryImage from '../../components/cloudinary-image';
import { ContactForm } from '../../components/pages/Services/Form';
import { attributes as ServicesAttributes } from '../../content/services.md';
import { comparePriorities } from '../../lib/compare-priorities';
import { sdk } from '../../lib/payload-gql-client';

export default async function Services() {
  const [pageData, servicesData] = await Promise.all([
    sdk.getServicesPage(),
    sdk.getServices(),
  ]);

  servicesData.Services.docs.sort(comparePriorities);

  return (
    <main className="items-center p-4">
      <div className="container justify-center">
        {pageData.ServicesPage.mainBody}
      </div>

      <div className="container">
        {/* allow shrinking on smaller screens */}
        <div className="w-full">
          <div className="w-full justify-center">
            <div>
              <ContactForm
                services={servicesData.Services.docs}
                step0Header={ServicesAttributes.step0_header}
                step1Header={ServicesAttributes.step1_header}
                attributionFieldPrompt={
                  ServicesAttributes.attribution_field_prompt
                }
                attributionFieldOptions={
                  ServicesAttributes.attribution_field_options
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container flex-row justify-evenly gap-2 p-4">
        <div className="relative min-h-[50vh] w-full">
          <CloudinaryImage
            className="object-contain"
            fill
            src="/dave-peach-web-netlify-cms/march_madness"
            alt="Dave Peach announcing at March Madness in 2021"
            // placeholder='blur'
            // blurDataURL={mainImageBlurDataUrl}
            priority
          />
        </div>
      </div>
      <label htmlFor="email">
        Email Dave
        <a
          className="mt-4 w-full"
          href="mailto:davepeachvoice@gmail.com"
          color="blue"
        />
      </label>
    </main>
  );
}
