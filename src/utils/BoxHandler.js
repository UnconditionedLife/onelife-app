import Box from '3box';
import uuid from 'uuid/v1';

export default class BoxHandler {
  constructor(appName) {
    this.appName = appName;
    this.box = {};
    this.spaceName = 'impact-list';
  }

  async CreateBox(account, provider, spaces, opts) {
    const box = await Box.openBox(account, provider, opts);
    // const box = await Box.create(provider)
    await box.auth(spaces, { account });
    await box.syncDone;
    this.box = box;
    const hasProfile = await box.public.get('name', 'oed');
    console.log(hasProfile);

    if (!hasProfile) {
      console.log('setting profile');
      await box.public.set('name', 'oed');
    }

    const space = await box.openSpace(this.appName);

    const exists = await space.public.get(this.spaceName);
    console.log(exists);

    if (!exists) {
      console.log('setting Impact list');
      const starterImpacts = [{
        name: 'OneLife Platform', impact: 'Enabling people to make the impacts they desire.', id: uuid(),
      }, {
        name: 'QOLEI', impact: 'Enabling people to legally formalize their impacts.', id: uuid(),
      }, {
        name: 'Radical Movement', impact: 'Inspiring people to make the impacts they desire.', id: uuid(),
      }];
      console.log(JSON.stringify(starterImpacts));
      await space.public.set(
        this.spaceName,
        JSON.stringify(starterImpacts),
      );
    }

    const impactList = await space.public.get(this.spaceName);
    console.log(impactList);

    return JSON.parse(impactList);
  }

  async updatePublicSpace(value) {
    const space = await this.box.openSpace(this.appName);
    const result = await space.public.set(this.spaceName, JSON.stringify(value));
    return result;
  }
}
