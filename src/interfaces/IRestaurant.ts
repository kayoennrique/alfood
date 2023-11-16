import IDish from "./IDish";

export default interface IRestaurant {
  id: number
  nome: string
  dishes: IDish[]
}