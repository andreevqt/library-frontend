import * as Yup from 'yup';

export const schema = Yup.object({
  title: Yup.string().label('Title').min(3).max(255).required(),
  authorId: Yup.number().label('Author'),
  genreId: Yup.number().label('Genre')
});
