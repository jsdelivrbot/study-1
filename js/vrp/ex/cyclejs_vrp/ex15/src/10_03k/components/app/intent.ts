import xs from 'xstream';
import { RequestInfo, Action, Intent } from '../../interfaces'

export default function intent(sources): Intent {
  const request: RequestInfo = {
    url: 'http://localhost:8080/rest/plan?select=plan_id,usr,depot_id',
    method: 'GET',
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJyb2xlIjoid2VidXNlciJ9.uSsS2cukBlM6QXe4Y0H90fsdkJSGcle9b7p_kMV1Ymk"
    },
    category: 'plan',
  }
  const requests$: xs<RequestInfo> = xs.from(
    [
      request,
    ]
  )
    .debug(x => { console.log("app intent requests$"); console.log(x); })
  return {
    actions: xs.create<Action>(),
    requests$
  }
}

