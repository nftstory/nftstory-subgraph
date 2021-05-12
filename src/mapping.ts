import { TransferSingle } from '../generated/NFTStory/NFTStory';
import { Token, NFTStory } from '../generated/schema'
import { BigInt } from "@graphprotocol/graph-ts"

export function handleTransfer(event: TransferSingle): void {
  let id = event.params.id.toHex();
  let token = Token.load(id)

  let nftstory = NFTStory.load(event.address.toHexString())

  if (nftstory === null) {
    nftstory = new NFTStory(event.address.toHexString())
    nftstory.minted = BigInt.fromString("0")
  }

  if (token == null) {
    token = new Token(id)
  }

  if (BigInt.fromUnsignedBytes(event.params.from).isZero()) {
    token.creator = event.params.to

    token.creationTxHash = event.transaction.hash
    token.mintTime = event.block.timestamp

    token.jsonMetadata = "ipfs://f01551114" + id.slice(2).substring(0, 40);
    token.nthMint = nftstory.minted.plus(BigInt.fromString("1"))

    nftstory.minted = token.nthMint;
    nftstory.save();
  }

  token.owner = event.params.to

  token.save();
}