import { AzureFunction, Context, HttpRequest } from '@azure/functions'

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.')

  const design = context.bindings.design

  context.res = {
    body: {
      out: design
    }
  }
}

export default httpTrigger
