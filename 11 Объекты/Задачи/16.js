// ****************************** Задача 11.16 *******************************

//     Допустим, что с бекенда приходит объект с данными о шлагбаумах и камерах.Написать функцию, которая будет принимать этот объект и возвращать массив объектов со шлагбаумами.Каждый объект шлагбаума должен содержать массив объектов с камерами согласно их`id`.
// // input
// const respData = {
//     devices: [
//       {
//         id: 1,
//         name: "Barrier 1",
//         cameraIDs: [1, 2],
//       },
//       {
//         id: 2,
//         name: "Barrier 2",
//         cameraIDs: [1],
//       },
//       {
//         id: 3,
//         name: "Barrier 3",
//         cameraIDs: [2, 3],
//       },
//     ],
//     cameras: [
//       {
//         id: 1,
//         name: "Camera 1",
//       },
//       {
//         id: 2,
//         name: "Camera 2",
//       },
//       {
//         id: 3,
//         name: "Camera 3",
//       },
//     ],
//   };

//   // output
//   [
//       {
//       id: 1,
//       name: "Barrier 1",
//       cameras: [
//         {
//           id: 1,
//           name: "Camera 1",
//         },
//         {
//           id: 2,
//           name: "Camera 2",
//         },
//       ],
//     },
//     {
//       id: 2,
//       name: "Barrier 2",
//       cameras: [
//         {
//           id: 1,
//           name: "Camera 1",
//         },
//       ],
//     },
//     {
//       id: 3,
//       name: "Barrier 3",
//       cameras: [
//         {
//           id: 2,
//           name: "Camera 2",
//         },
//         {
//           id: 3,
//           name: "Camera 3",
//         },
//       ],
//     },
//   ];


const respData = {
    devices: [
        {
            id: 1,
            name: "Barrier 1",
            cameraIDs: [1, 2],
        },
        {
            id: 2,
            name: "Barrier 2",
            cameraIDs: [1],
        },
        {
            id: 3,
            name: "Barrier 3",
            cameraIDs: [2, 3],
        },
    ],
    cameras: [
        {
            id: 1,
            name: "Camera 1",
        },
        {
            id: 2,
            name: "Camera 2",
        },
        {
            id: 3,
            name: "Camera 3",
        },
    ],
};

function newDevice(device, cameras) {
    let cameraIDs = device.cameraIDs;
    let camerasDevice = cameras.filter((camera) => cameraIDs.includes(camera.id));

    let newDevice = {
        ...device,
        cameraIDs: undefined,
        cameras: camerasDevice,
    };
    return newDevice;
}

function createDevices(respData) {
    let devices = respData.devices;
    let cameras = respData.cameras;

    let newDevices = devices.map((device) => {
        let newDev = newDevice(device, cameras)
        return newDev;
    })
    return newDevices;
}

console.log(createDevices(respData));