import { AzureFunction, Context, HttpRequest } from '@azure/functions'

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.')

  context.bindings.createRoom = JSON.stringify({
    name: req.body.name
  })
  context.done
}

export default httpTrigger
