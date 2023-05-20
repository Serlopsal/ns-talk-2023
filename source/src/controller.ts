import { Request, Response } from 'express';
import { ALIAS, TOPIC, VERSION } from './constants';

export const getTopic = async (req: Request, res: Response) : Promise<void> => {
  res
    .status(200)
    .send(`We are in NS-TALK-${VERSION}, talking about ${TOPIC}`);
}
export const getAlias = async (req: Request, res: Response) : Promise<void> => {
  res
    .status(200)
    .send(`The alias of '${TOPIC}' is ${ALIAS}'`);
}
