import { getRepository } from "typeorm";
import { Url } from "../../entity/Url";

interface UrlSeed {
  url: string;
  accessKey: string;
  accessCount: number;
}

export const urlSeeds: UrlSeed[] = [
  {
    url: "https://www.naver.com/",
    accessKey: "1EiA912zuW",
    accessCount: 49,
  },
  {
    url: "https://www.google.com/",
    accessKey: "81yQ0n39Rf",
    accessCount: 13,
  },
  {
    url: "https://www.youtube.com/",
    accessKey: "existKey",
    accessCount: 0,
  },
];

export const getRandomUrlSeed = () => {
  return urlSeeds[Math.floor(Math.random() * urlSeeds.length)];
};

export const urlSeeder = async () => {
  const urlRepository = getRepository(Url);
  await Promise.all(
    urlSeeds.map(async (urlSeed) => {
      const url = new Url();
      Object.assign(url, urlSeed);
      return await urlRepository.save(url);
    })
  );
};
