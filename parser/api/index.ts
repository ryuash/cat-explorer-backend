export const NODE_STATUS = `${process.env.RPC}/status`;
export const BLOCK_DETAILS_LCD = (height: string) => `${process.env.LCD}/blocks/${height}`;
export const BLOCKS_DETAILS_RPC = `${process.env.RPC}/block`; // insert params yourself
