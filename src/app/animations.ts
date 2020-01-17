import { trigger, transition, style, query, animate, animateChild, group, state, keyframes } from "@angular/animations";

export const pageNavigationAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          height: '100%',
          opacity: 0,
        }),
      ], { optional: true } ),
      // Animate the new page in
      query(':enter', [
        animate('250ms', style({ opacity: 1 })),
        // animate('600ms ease', style({ opacity: 1, transform: 'scale(1) translateY(0)' })),
      ], { optional: true})
    ]),
]);