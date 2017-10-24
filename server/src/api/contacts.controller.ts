import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    var contacts = [
        {
          name: 'Vk-link',
          link: 'www.youarejerk.com',
          owner: 'You Mom',
          description: 'Mockmockmock' 
        },
         {
          name: 'Vk-link',
          link: 'www.youarejerk.com',
          owner: 'You Mom',
          description: 'Mockmockmock' 
        },
        {
          name: 'Vk-link',
          link: 'www.youarejerk.com',
          owner: 'You Mom',
          description: 'Mockmockmock' 
        }
    ];

    res.send(contacts);
});

export const ContactController: Router = router;