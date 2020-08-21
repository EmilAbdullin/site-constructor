import image from './assets/img.jpg'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock} from './classes/blocks'

const text = 'Здесь должны быть текст'
export const model = [
    new TitleBlock('Конструктор сайтов на чистом JavaScript!', {
        tag: 'h2',
        styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
      }),
      new ImageBlock(image, {
        styles: 'padding: 2rem 0;display: flex;justify-content: center;',
        alt: 'my image',
        imageStyles: 'width: 500px; height: auto;'
      }),
      new TextColumnsBlock([
        'Приложение на чистом JavaScript, без использования библиотек',
        'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
        'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'
      ], {
        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
      }),
      new TextBlock(text, {
        styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
      })
]