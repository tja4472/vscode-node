// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function try1(): Promise<void> {
  // const vitest = await startVitest("test");

  // await vitest?.close();
  const vitestNode = await import("vitest/node");
  // const vitest = await vitestNode.startVitest("test");
  const vitest = await vitestNode.startVitest("test",[], {
    watch: false});  
console.log('aaaaaa>')
  await vitest?.close();
}

try1();

