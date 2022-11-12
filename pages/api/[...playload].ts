import { NextApiRequest, NextApiResponse } from 'next';
import { payload } from '../../lib/payload';

export const config = {
  api: {
    // Allow express to body of requests.
    bodyParser: false,
    // Avoid warning on requests - API resolved without sending a response.
    externalResolver: true,
    // In development server we serve assets through express webpack endpoint.
    responseLimit: false,
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log('Received request on Payload route');
  return payload.express(req, res);
}
