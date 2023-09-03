export type Contact={
    id:number,
    firstName:string,
    lastName:string,
    status:string
}

export type EditableStatus ={
    [contactId:number]:boolean
}
export type InitialState ={
    contacts:Contact[],
    editableStatus:EditableStatus
    
   
}
export type ModalState ={
    isOpen:boolean,
    isEditable:boolean
}

export type MarkerType = {
    lat:number,
    long:number,
    country:string,
    cases:number,
    deaths:number,
    recovered:number,
    img:string
}
export type CountriesMap = {
    updated :number,
    country:string,
    countryInfo:{
        id:number,
        iso2:string,
        iso3:string,
        lat:number,
        long:number,
        flag:string
    },
    cases:number,
    deaths:number,
    recovered:number
}

export type CovidData = {
cases:number,
deaths:number,
recovered:number,
active:number
}
export type DailyCovidData = {
    cases:{
       [ date:string ]:number
    },
    recovered:{
        [ date:string ]:number
     },
     deaths:{
        [ date:string ]:number
     },
}