// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NFTStory__requireValidMintPermitInputPermitStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get minimumPrice(): BigInt {
    return this[2].toBigInt();
  }
}

export class NFTStory__requireValidMintPermitForAddressInputPermitStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get minimumPrice(): BigInt {
    return this[2].toBigInt();
  }

  get recipient(): Address {
    return this[3].toAddress();
  }
}

export class NFTStory extends ethereum.SmartContract {
  static bind(address: Address): NFTStory {
    return new NFTStory("NFTStory", address);
  }

  EIP712DOMAIN_TYPEHASH(): Bytes {
    let result = super.call(
      "EIP712DOMAIN_TYPEHASH",
      "EIP712DOMAIN_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_EIP712DOMAIN_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "EIP712DOMAIN_TYPEHASH",
      "EIP712DOMAIN_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MINT_PERMIT_FOR_ADDRESS_TYPEHASH(): Bytes {
    let result = super.call(
      "MINT_PERMIT_FOR_ADDRESS_TYPEHASH",
      "MINT_PERMIT_FOR_ADDRESS_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_MINT_PERMIT_FOR_ADDRESS_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "MINT_PERMIT_FOR_ADDRESS_TYPEHASH",
      "MINT_PERMIT_FOR_ADDRESS_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MINT_PERMIT_TYPEHASH(): Bytes {
    let result = super.call(
      "MINT_PERMIT_TYPEHASH",
      "MINT_PERMIT_TYPEHASH():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_MINT_PERMIT_TYPEHASH(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "MINT_PERMIT_TYPEHASH",
      "MINT_PERMIT_TYPEHASH():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  TOKEN_ID_CREATOR_SHORT_IDENTIFIER_BITMASK(): BigInt {
    let result = super.call(
      "TOKEN_ID_CREATOR_SHORT_IDENTIFIER_BITMASK",
      "TOKEN_ID_CREATOR_SHORT_IDENTIFIER_BITMASK():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_TOKEN_ID_CREATOR_SHORT_IDENTIFIER_BITMASK(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "TOKEN_ID_CREATOR_SHORT_IDENTIFIER_BITMASK",
      "TOKEN_ID_CREATOR_SHORT_IDENTIFIER_BITMASK():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(account: Address, tokenId: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(
    account: Address,
    tokenId: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  computeTokenId(metadataSHA1: BigInt, creator: Address): BigInt {
    let result = super.call(
      "computeTokenId",
      "computeTokenId(uint160,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(metadataSHA1),
        ethereum.Value.fromAddress(creator)
      ]
    );

    return result[0].toBigInt();
  }

  try_computeTokenId(
    metadataSHA1: BigInt,
    creator: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "computeTokenId",
      "computeTokenId(uint160,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(metadataSHA1),
        ethereum.Value.fromAddress(creator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  computeTokenId1(metadataSHA1: BigInt): BigInt {
    let result = super.call(
      "computeTokenId",
      "computeTokenId(uint160):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(metadataSHA1)]
    );

    return result[0].toBigInt();
  }

  try_computeTokenId1(metadataSHA1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "computeTokenId",
      "computeTokenId(uint160):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(metadataSHA1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isMinted(tokenId: BigInt): boolean {
    let result = super.call("isMinted", "isMinted(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toBoolean();
  }

  try_isMinted(tokenId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("isMinted", "isMinted(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  requireValidMintPermit(
    permit: NFTStory__requireValidMintPermitInputPermitStruct,
    v: i32,
    r: Bytes,
    s: Bytes
  ): Address {
    let result = super.call(
      "requireValidMintPermit",
      "requireValidMintPermit((uint256,uint256,uint256),uint8,bytes32,bytes32):(address)",
      [
        ethereum.Value.fromTuple(permit),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return result[0].toAddress();
  }

  try_requireValidMintPermit(
    permit: NFTStory__requireValidMintPermitInputPermitStruct,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "requireValidMintPermit",
      "requireValidMintPermit((uint256,uint256,uint256),uint8,bytes32,bytes32):(address)",
      [
        ethereum.Value.fromTuple(permit),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  requireValidMintPermitForAddress(
    permit: NFTStory__requireValidMintPermitForAddressInputPermitStruct,
    v: i32,
    r: Bytes,
    s: Bytes
  ): Address {
    let result = super.call(
      "requireValidMintPermitForAddress",
      "requireValidMintPermitForAddress((uint256,uint256,uint256,address),uint8,bytes32,bytes32):(address)",
      [
        ethereum.Value.fromTuple(permit),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return result[0].toAddress();
  }

  try_requireValidMintPermitForAddress(
    permit: NFTStory__requireValidMintPermitForAddressInputPermitStruct,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "requireValidMintPermitForAddress",
      "requireValidMintPermitForAddress((uint256,uint256,uint256,address),uint8,bytes32,bytes32):(address)",
      [
        ethereum.Value.fromTuple(permit),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenIdMatchesCreator(tokenId: BigInt, creatorAddress: Address): boolean {
    let result = super.call(
      "tokenIdMatchesCreator",
      "tokenIdMatchesCreator(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromAddress(creatorAddress)
      ]
    );

    return result[0].toBoolean();
  }

  try_tokenIdMatchesCreator(
    tokenId: BigInt,
    creatorAddress: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "tokenIdMatchesCreator",
      "tokenIdMatchesCreator(uint256,address):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(tokenId),
        ethereum.Value.fromAddress(creatorAddress)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  uri(tokenId: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_uri(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class BuyAndMintCall extends ethereum.Call {
  get inputs(): BuyAndMintCall__Inputs {
    return new BuyAndMintCall__Inputs(this);
  }

  get outputs(): BuyAndMintCall__Outputs {
    return new BuyAndMintCall__Outputs(this);
  }
}

export class BuyAndMintCall__Inputs {
  _call: BuyAndMintCall;

  constructor(call: BuyAndMintCall) {
    this._call = call;
  }

  get permit(): BuyAndMintCallPermitStruct {
    return this._call.inputValues[0].value.toTuple() as BuyAndMintCallPermitStruct;
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get v(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class BuyAndMintCall__Outputs {
  _call: BuyAndMintCall;

  constructor(call: BuyAndMintCall) {
    this._call = call;
  }
}

export class BuyAndMintCallPermitStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get minimumPrice(): BigInt {
    return this[2].toBigInt();
  }
}

export class BuyAndMintForAddressCall extends ethereum.Call {
  get inputs(): BuyAndMintForAddressCall__Inputs {
    return new BuyAndMintForAddressCall__Inputs(this);
  }

  get outputs(): BuyAndMintForAddressCall__Outputs {
    return new BuyAndMintForAddressCall__Outputs(this);
  }
}

export class BuyAndMintForAddressCall__Inputs {
  _call: BuyAndMintForAddressCall;

  constructor(call: BuyAndMintForAddressCall) {
    this._call = call;
  }

  get permit(): BuyAndMintForAddressCallPermitStruct {
    return this._call.inputValues[0].value.toTuple() as BuyAndMintForAddressCallPermitStruct;
  }

  get v(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class BuyAndMintForAddressCall__Outputs {
  _call: BuyAndMintForAddressCall;

  constructor(call: BuyAndMintForAddressCall) {
    this._call = call;
  }
}

export class BuyAndMintForAddressCallPermitStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get minimumPrice(): BigInt {
    return this[2].toBigInt();
  }

  get recipient(): Address {
    return this[3].toAddress();
  }
}

export class ChangeIPFSGatewayURIPrefixCall extends ethereum.Call {
  get inputs(): ChangeIPFSGatewayURIPrefixCall__Inputs {
    return new ChangeIPFSGatewayURIPrefixCall__Inputs(this);
  }

  get outputs(): ChangeIPFSGatewayURIPrefixCall__Outputs {
    return new ChangeIPFSGatewayURIPrefixCall__Outputs(this);
  }
}

export class ChangeIPFSGatewayURIPrefixCall__Inputs {
  _call: ChangeIPFSGatewayURIPrefixCall;

  constructor(call: ChangeIPFSGatewayURIPrefixCall) {
    this._call = call;
  }

  get newIPFSGatewayURIPrefix(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class ChangeIPFSGatewayURIPrefixCall__Outputs {
  _call: ChangeIPFSGatewayURIPrefixCall;

  constructor(call: ChangeIPFSGatewayURIPrefixCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get version(): string {
    return this._call.inputValues[1].value.toString();
  }

  get ipfsGatewayURIPrefix(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RevokeMintPermitForAddressCall extends ethereum.Call {
  get inputs(): RevokeMintPermitForAddressCall__Inputs {
    return new RevokeMintPermitForAddressCall__Inputs(this);
  }

  get outputs(): RevokeMintPermitForAddressCall__Outputs {
    return new RevokeMintPermitForAddressCall__Outputs(this);
  }
}

export class RevokeMintPermitForAddressCall__Inputs {
  _call: RevokeMintPermitForAddressCall;

  constructor(call: RevokeMintPermitForAddressCall) {
    this._call = call;
  }

  get permit(): RevokeMintPermitForAddressCallPermitStruct {
    return this._call.inputValues[0].value.toTuple() as RevokeMintPermitForAddressCallPermitStruct;
  }
}

export class RevokeMintPermitForAddressCall__Outputs {
  _call: RevokeMintPermitForAddressCall;

  constructor(call: RevokeMintPermitForAddressCall) {
    this._call = call;
  }
}

export class RevokeMintPermitForAddressCallPermitStruct extends ethereum.Tuple {
  get tokenId(): BigInt {
    return this[0].toBigInt();
  }

  get nonce(): BigInt {
    return this[1].toBigInt();
  }

  get minimumPrice(): BigInt {
    return this[2].toBigInt();
  }

  get recipient(): Address {
    return this[3].toAddress();
  }
}

export class RevokeMintPermitsUnderNonceCall extends ethereum.Call {
  get inputs(): RevokeMintPermitsUnderNonceCall__Inputs {
    return new RevokeMintPermitsUnderNonceCall__Inputs(this);
  }

  get outputs(): RevokeMintPermitsUnderNonceCall__Outputs {
    return new RevokeMintPermitsUnderNonceCall__Outputs(this);
  }
}

export class RevokeMintPermitsUnderNonceCall__Inputs {
  _call: RevokeMintPermitsUnderNonceCall;

  constructor(call: RevokeMintPermitsUnderNonceCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get accountTransactionCount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RevokeMintPermitsUnderNonceCall__Outputs {
  _call: RevokeMintPermitsUnderNonceCall;

  constructor(call: RevokeMintPermitsUnderNonceCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
