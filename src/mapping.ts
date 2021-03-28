import { TransferSingle } from '../generated/NFTStory/NFTStory';
import { Token } from '../generated/schema'

export function handleTransfer(event: TransferSingle): void {
  let id = event.params.id.toHex();
  let token = Token.load(id)

  if (token == null) {
    token = new Token(id)
  }

  token.owner = event.params.to;

  token.save();
}

// export function handleUpdatedGravatar(event: UpdatedGravatar): void {
//   let id = event.params.id.toHex()
//   let gravatar = Gravatar.load(id)
//   if (gravatar == null) {
//     gravatar = new Gravatar(id)
//   }
//   gravatar.owner = event.params.owner
//   gravatar.displayName = event.params.displayName
//   gravatar.imageUrl = event.params.imageUrl
//   gravatar.save()
// }
