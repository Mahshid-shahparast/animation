import { Component } from '@angular/core';
import {
  animate,
  keyframes,
  query,
  stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

const timing = '1s ease-in';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('open-close', [
      state(
        'open',
        style({
          height: '100px',
          opacity: 1,
          backgroundColor: 'yellow',
        })
      ),
      state(
        'close',
        style({
          height: 'auto',
          opacity: 0.5,
          backgroundColor: 'blue',
        })
      ),
      transition('open => close', animate('1s ease-in-out')),
      transition('close => open', animate('0.5s ease-in-out')),
    ]),
    trigger('open-close-text', [
      state(
        'open',
        style({
          color: 'black',
        })
      ),
      state(
        'close',
        style({
          color: 'white',
        })
      ),
      transition('open => close', animate('1s')),
      transition('close => open', animate('0.5s')),
    ]),
    trigger('show-hide', [
      state('show', style({ opacity: 1, height: 'auto' })),
      state('hide', style({ opacity: 0, height: '90px' })),
      transition('hide => show', animate('1.5s')),
      transition('show => hide', animate('0.5s')),
    ]),
    trigger('rotate-normal', [
      state(
        'rotate',
        style({
          // transform: 'rotate(360deg)',
          transform: 'rotateY(180deg)',
        })
      ),
      state(
        'normal',
        style({
          // transform: 'rotate(0deg)',
          transform: 'rotateY(0deg)',
        })
      ),
      transition('rotate <=> normal', animate('1s ease-in-out')),
    ]),
    trigger('push-normal', [
      transition(':enter', [
        style({ transform: 'translateX(-100vw)' }),
        animate('0.5s ease-in', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate('1s ease-out', style({ transform: 'translateX(100vw)' })),
      ]),
    ]),
    trigger('crazy-normal', [
      transition(':enter', [
        animate(
          timing,
          keyframes([
            style({ transform: 'translateX(50%) scale(0.5)', offset: 0 }),
            style({ transform: 'translateX(-50%) scale(0.5)', offset: 0.1 }),
            style({
              transform: 'translateX(-50%) scale(0.65) rotate(360deg)',
              offset: 0.6,
            }),
            style({
              transform: 'translateX(0) scale(1) rotate(360deg)',
              offset: 1,
            }),
          ])
        ),
      ]),
      transition(':leave', [
        animate(
          timing,
          keyframes([
            style({
              transform: 'translateX(0) scale(1) rotate(360deg)',
              offset: 0,
            }),
            style({
              transform: 'translateX(-50%) scale(0.65) rotate(360deg)',
              offset: 0.1,
            }),
            style({
              transform: 'translateX(-50%) scale(0.5)',
              offset: 0.6,
            }),
            style({
              transform: 'translateX(50%) scale(0.5)',
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
    trigger('animationQuery', [
      transition(':enter', [
        query(
          ':enter',
          [
            style({
              opocity: '0',
              transform: 'scale(0.7)',
            }),
            stagger(
              100,
              animate(
                '1s ease-in',
                style({ opocity: '1', transform: 'scale(1)' })
              )
            ),
          ],
          { optional: true }
        ),
        // query(
        //   ':leave',
        //   [
        //     style({
        //       opocity: '1',
        //       transform: 'scale(1)',
        //     }),
        //     animate(
        //       '1s ease-in',
        //       style({ opocity: '0', transform: 'scale(0.7)' })
        //     ),
        //   ],
        //   { optional: true }
        // ),
      ]),
    ]),
  ],
})
export class AppComponent {
  isRotate: boolean = false;
  isOpen: boolean = false;
  showAirPlane: boolean = true;
  showCamera: boolean = false;
  contacts: { imgeSrc: string; name: string; description: string }[] = [
    {
      imgeSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s',
      name: 'Anna',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];
  addContacts() {
    this.contacts = [
      ...this.contacts,
      ...[
        {
          imgeSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5m509gsAe8RQHmuoRkes24WuNX09QQP2bLA&s',
          name: 'Choo',
          description:
            'Vitae vitae hac nulla, vehicula ac sem. Elementum nullam pulvinar orci curae dapibus efficitur et varius. Lectus scelerisque porttitor gravida; vel quisque ornare. Vitae primis facilisis donec, augue tempus lorem. Efficitur tincidunt ridiculus rutrum parturient sodales velit. Mi habitant nisi semper amet mattis in condimentum. Tortor volutpat quis pretium suscipit risus sollicitudin mus nostra.',
        },
        {
          imgeSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn8FZ9TtlPcI_zEB7guz_raenlAFQqY19T6A&s',
          name: 'Sara',
          description:
            'Vestibulum himenaeos per fermentum ultrices eu, semper ipsum himenaeos. Suscipit id varius donec facilisis; rhoncus nulla hendrerit. Pellentesque placerat suspendisse ligula sollicitudin metus sed. Commodo rutrum nisl sit quisque quisque? Maximus dignissim porta vulputate dis taciti. Curabitur ad aliquam at ligula sit integer penatibus. Eros placerat morbi lectus nunc massa sed ullamcorper. Tempor cubilia risus eget vel ex. Facilisis et cras nulla augue himenaeos laoreet nulla class. Inceptos varius dictumst aliquet gravida est.',
        },
        {
          imgeSrc:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzn4d851OKkmhRNkLl7bvAKuEGYXp9vHnLfA&s',
          name: 'Shirin',
          description:
            'Ultrices quisque malesuada fusce mus elementum mauris nam blandit. Bibendum ipsum volutpat accumsan scelerisque sagittis justo consectetur. Varius mus augue nam suspendisse, metus finibus. Sociosqu morbi tristique fames bibendum accumsan; conubia velit. Phasellus class non suspendisse accumsan elementum dictumst metus orci consequat. Aptent aliquam velit volutpat; per facilisis quam quam. Imperdiet elementum euismod nisi convallis libero sapien.',
        },
        {
          imgeSrc:
            'data:image/jpeg;base64,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',
          name: 'Jimmy',
          description:
            'Ridiculus amet enim consectetur faucibus dolor dapibus turpis. Porttitor bibendum tempor ac suspendisse felis porttitor elit? Eget interdum viverra iaculis habitasse, metus purus natoque. Libero commodo hendrerit natoque; nisl nullam fringilla. Per sociosqu lacinia elementum diam malesuada. Tellus congue dis netus turpis consectetur justo; viverra aptent nibh. Etiam ultrices ridiculus molestie dignissim congue aenean potenti convallis. Curabitur quisque duis blandit penatibus eget lobortis pellentesque?',
        },
      ],
    ];
  }

  removeContacts() {
    this.contacts = [this.contacts[0]];
  }
}
