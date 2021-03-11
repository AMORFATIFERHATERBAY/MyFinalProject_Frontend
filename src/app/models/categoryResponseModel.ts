import { Category } from './category';
import { ResponseModel } from './responseModel';

export interface CategoryResponseModel extends ResponseModel {
    entity:Category[]
}