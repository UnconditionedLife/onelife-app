import Box from '3box';
import uuid from 'uuid/v1';


// const profile = await Box.getProfile("0xf43321212844541463dDca19eb6377651445A5AE")
// console.log(profile)

if (typeof window.ethereum !== 'undefined') {
  const ethAccount = window.ethereum.enable();
  console.log(ethAccount);
  // Ethereum user detected. You can now use the provider.
  const web3Provider = window.ethereum;
  console.log(web3Provider);
}

async function CreateBox(account, provider, spaces) {
  const box = await Box.openBox(account, provider);
  // const box = await Box.create(provider)
  await box.auth(spaces, { account });
  await box.syncDone;
  const hasProfile = await box.public.get('name', 'oed');
  console.log(hasProfile);

  if (!hasProfile) {
    console.log('setting profile');
    await box.public.set('name', 'oed');
  }

  const app = 'OneLife';
  const space = await box.openSpace(app);
  // await space.public.remove('impact-list') // used to clear the list
  // and reset to hard coded values

  const exists = await space.public.get('impact-list');
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
      'impact-list',
      JSON.stringify(starterImpacts),
    );
  }

  // {name: 'Radical Movement', purpose: 'To inspire people to make the impacts
  // they desire.', id: uuid()},
  // {name: 'OneLife Network', purpose: 'To enable people to make the impacts
  // they desire.', id: uuid()},
  // {name: 'Impact Network', purpose: 'To create an interdependent community
  // making the impacts they desire.', id: uuid()}

  const impactList = await space.public.get('impact-list');
  console.log(impactList);

  return JSON.parse(impactList);
}

export default CreateBox;


// below was testing using the Pinata service

/* const pinataApiKey = "ee31a9d6465e600c5287";
const pinataSecretApiKey = "8846bbfb844ef4d08a6e9737accbff86dd3ccf6d85519351a644672c5ef64d94";

export const testAuthentication = () => {
    const url = `https://api.pinata.cloud/data/testAuthentication`;
    return axios
        .get(url, {
            headers: {
                'pinata_api_key': pinataApiKey,
                'pinata_secret_api_key': pinataSecretApiKey
            }
        })
        .then(function (response) {
            //handle your response here
            console.log(response)
            console.log(response.status)
        })
        .catch(function (error) {
            //handle error here
            console.log(error)
        });
};

export const pinJSONToIPFS = (JSONBody) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
    return axios
        .post(
            url,
            JSONBody,
            {
                headers: {
                    'pinata_api_key': pinataApiKey,
                    'pinata_secret_api_key': pinataSecretApiKey
                }
            }
        ).then(function (response) {
            //handle response here
            console.log(response)
            console.log(response.status)
        })
        .catch(function (error) {
            //handle error here
            console.log(error)
        });
}; */
