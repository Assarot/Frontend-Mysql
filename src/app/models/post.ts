export class Post {
  post_id: number;
  titulo: string;
  descripcion: string;
  constructor(
    post_id: number = 0,
    titulo: string = '',
    descripcion: string = ''
  ) {
    this.post_id = post_id;
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}
