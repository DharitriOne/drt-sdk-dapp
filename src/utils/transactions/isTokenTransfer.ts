export function isTokenTransfer({
  tokenId,
  moaLabel
}: {
  tokenId: string | undefined;
  moaLabel: string;
}) {
  return Boolean(tokenId && tokenId !== moaLabel);
}
