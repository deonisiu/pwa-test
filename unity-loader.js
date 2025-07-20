export async function loadUnityGame(containerId, basePath) {
  console.log('loadUnityGame');

  console.log('containerId: '+containerId);

  const container = document.querySelector("#"+containerId);

  const loaderUrl = `${basePath}/Build/UnityLoader.js`;
  const configUrl = `${basePath}/Build/build.json`;

  console.log(configUrl);
  console.log(loaderUrl);

  await loadScript(loaderUrl);

  fetch(configUrl)
    .then(response => response.json())
    .then(config => {
      console.log('config');
      console.log(config);

      console.log('container');
      console.log(container);
      console.log(`${basePath}/Build/${config.dataUrl}`);
      console.log(`${basePath}/Build/${config.frameworkUrl}`);
      console.log(`${basePath}/Build/${config.codeUrl}`);

      createUnityInstance(container, {
        dataUrl: `${basePath}/Build/${config.dataUrl}`,
        frameworkUrl: `${basePath}/Build/${config.frameworkUrl}`,
        codeUrl: `${basePath}/Build/${config.codeUrl}`,
        streamingAssetsUrl: "StreamingAssets",
        companyName: config.companyName || "YourCompany",
        productName: config.productName || "Game",
        productVersion: config.productVersion || "1.0",
      });
    });
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });
}
