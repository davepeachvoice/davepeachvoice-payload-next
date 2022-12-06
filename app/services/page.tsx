import CloudinaryImage from '../../components/cloudinary-image';
import { ContactForm } from '../../components/pages/Services/Form';
import { attributes as ServicesAttributes } from '../../content/services.md';
import { isTruthy } from '../../lib/is-truthy';
import { sdk } from '../../lib/payload-gql-client';

export default async function Services() {
  const [pageData, servicesData] = await Promise.all([
    sdk.getServicesPage(),
    sdk.getServices(),
  ]);
  const services = servicesData.Services?.docs;
  if (!services) return;
  const truthyServices = services.filter(isTruthy);

  return (
    <main className="items-center p-4">
      <div className="container justify-center">
        {pageData.ServicesPage?.mainBody}
      </div>

      <div className="h-3" />

      <div className="container mx-auto max-w-xl">
        {/* allow shrinking on smaller screens */}
        <div className="w-full">
          <div className="w-full justify-center">
            <div>
              <ContactForm
                services={truthyServices}
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

      <div className="h-6" />

      <div className="container mx-auto max-w-xl">
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

      <div className="h-6" />

      <label htmlFor="email" className="flex w-full justify-center">
        <div className="rounded-full bg-neutral-200 px-6 py-2">
          Email Dave
          <a
            className="mt-4 w-full"
            href="mailto:davepeachvoice@gmail.com"
            color="blue"
          />
        </div>
      </label>
    </main>
  );
}
