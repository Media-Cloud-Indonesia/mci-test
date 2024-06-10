import { Express } from 'express';
import { FilterDTO, TodoDTO } from './todo.interface';
import { readData, writeData } from '../../data';
import { shortUUIDGenerator } from '../../utils/ShortUUIDGenerator';

export default class TodoService {
  constructor(
    private app: Express,
  ) {}

  create(dto: TodoDTO) {
    const data = readData();
    const newTodo = {
      id: shortUUIDGenerator(),
      deletedAt: null,
      ...dto,
    };
    data.push(newTodo);
    writeData(data);
    return newTodo;
  }

  update(id: string, dto: TodoDTO) {
    // implement
  }

  get(id: string) {
    // implement
  }
  
  getAll(filter: FilterDTO) {
    const data = readData();
    // implement filter
    return data;
  }

  hardDelete(id: string) {
    // implement
  }

  softDelete(id: string) {
    // implement
  }
}