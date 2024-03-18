// Даны объект - девайс(шлагбаум) и массив объектов - камер.Написать функцию, которая будет принимать этот объект и массив объектов, и возвращать объект со свойствами: название барьера name и массивом объектов с данными о камерах cameras.Свойство cameras должно содержать данные только о тех камерах, чьи id указаны в свойстве cameraIDs.
// // input
// const device = {
// 	name: "Barrier 1",
// 	cameraIDs: [1, 2],
// };

// const cameras = [
//     {
//       id: 1,
//       name: "Camera 1",
//     },
//     {
//       id: 2,
//       name: "Camera 2",
//     },
//     {
//       id: 3,
//       name: "Camera 3",
//     },
//   ];

// // output
// {
//    name: "Barrier 1",
//    cameras: [
//      {
//        id: 1,
//        name: "Camera 1",
//      },
//      {
//        id: 2,
//        name: "Camera 2",
//      },
//    ],
//  }
const d = {
    name: "Barrier 1",
    cameraIDs: [1, 2],
};

const c = [
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
];

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

console.log(newDevice(d, c))

