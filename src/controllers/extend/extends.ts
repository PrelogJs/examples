export type Extend = {
  user: { name: string; id: number };
  get_rnd_id(): number;
};

export const RndId = () => Math.round(1 - 0.5 + Math.random() * (100 - 1 + 1));
