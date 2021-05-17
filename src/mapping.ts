import { TransferSingle } from '../generated/NFTStory/NFTStory';
import { Token, NFTStory, Creator } from '../generated/schema'
import { BigInt } from "@graphprotocol/graph-ts"

export function handleTransfer(event: TransferSingle): void {
  let id = event.params.id.toHex();
  let token = Token.load(id)

  let nftstory = NFTStory.load(event.address.toHex())

  if (nftstory === null) {
    nftstory = new NFTStory(event.address.toHex())
    nftstory.minted = BigInt.fromString("0")
  }

  if (token == null) {
    token = new Token(id)
  }


  if (BigInt.fromUnsignedBytes(event.params.from).isZero()) {
    let creator = Creator.load(event.params.to.toHex())

    if (creator == null) {
      creator = new Creator(event.params.to.toHex())
    }

    token.creator = creator.id;

    token.creationTxHash = event.transaction.hash
    token.mintTime = event.block.timestamp

    token.jsonMetadata = "ipfs://f01551114" + id.slice(2).substring(0, 40);
    token.nthMintOverral = nftstory.minted.plus(BigInt.fromString("1"))
    token.nthMintCreator = creator.minted .plus(BigInt.fromString("1"))

    nftstory.minted = token.nthMintOverral;
    creator.minted = token.nthMintCreator;

    creator.minted = creator.minted.plus(BigInt.fromString("1"))


    creator.save();
    nftstory.save();
  }

  token.owner = event.params.to

  token.save();
}
