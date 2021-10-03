export const HOME_ROUTE = '/'
export const MISSION_ROUTE = '/missions' 
export const DATA_ROUTE = '/data'

export const missions = [
    {
        title: 'PACE',
        author: 'Seitov Alibek',
        description: "PACE is NASA's Plankton, Aerosol, Cloud, ocean Ecosystem mission, that planned to to extend key systematic ocean colour, aerosol, and cloud data records for Earth system and climate studies. Moreover, it will address new and emerging science questions using its advanced instruments, surpassing the capabilities of previous and current missions.",
        img: '/pace.png'
    },
    {
        title: 'GPM',
        author: 'Talgat Tamir',
        description: 'The GPM (Global Precipitation Measurement) mission has several scientific goals: improving precipitation measurements from space, improving knowledge about precipitation systems, water cycle variability and freshwater availability, improving climate modeling and forecasting capabilities.',
        img: '/gpm.png'
    }
]

export const data = [
    {
        id: "big_data",
        title: "Big data",
        text: "Big data is closely related to large amounts of data that cannot be processed or analyzed using traditional methods. NASA is using this type of technology to ensure the reliability of its technologies and equipment.",
        image: '/big-data.jpg'
    },
    {
        id: "nisar",
        title: "NISAR",
        text: "NISAR's data can help people worldwide enhance management of natural resources and hazards, as well as providing information for scientists the effects and pace of climate change.",
        image: '/nisar.png'
    },
    {
        id: "maia",
        title: "MAIA",
        text: "MAIA uses a twin-camera instrument that will make radiometric and polarimetric measurements needed to characterize the sizes, compositions, and quantities of particulate matter in air pollution.",
        image: '/MAIA.jpg'
    }
]