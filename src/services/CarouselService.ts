import axios from 'axios';
import {AppResponse, AxiosAppResponse} from "../models/Response";
import {environment} from '../environment/environment'
import { CarouselModel } from '../models/CarouselModel';

export class CarouselService {

    public static async getCarousels(): Promise<AppResponse<CarouselModel[]>> {
        const res = await axios.get<void, AxiosAppResponse<CarouselModel[]>>(environment.api_url + '/api/carousel?slides=10');
        return res.data;
    }

}
