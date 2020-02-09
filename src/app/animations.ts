import { trigger, transition, style, query, animate, animateChild, group, state, keyframes, stagger } from "@angular/animations";

let animationTimeLength = '250ms'

export const pageNavigationAnimation =
  trigger('routeAnimations', [

    ProjectsPageTransition(),
    DefaultPageTransition(),

]);

export function DefaultPageTransition() {
  return transition('* <=> *', [

    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0,
        transform: 'scale(0)'
      }),
    ], { optional: true } ),

    query(':leave', [
      style({opacity: 1, transform: 'scale(1)'}),
      animate(animationTimeLength + ' ease', style({ opacity: 0, transform: 'scale(0)' })),
    ], { optional: true}),
    query(':enter', [
      animate(animationTimeLength + ' ease', style({ opacity: 1, transform: 'scale(1)' })),
    ], { optional: true}),

  ]);
}

export function ProjectsPageTransition() {
  return transition('* => ProjectsPage', [

    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: 0,
        transform: 'scale(0)'
      }),
    ], { optional: true } ),

    query(':enter .card', [
      style({
        opacity: 0,
      }),
    ]),

    query(':leave', [
      style({opacity: 1, transform: 'scale(1)'}),
      animate(animationTimeLength + ' ease', 
        style({ 
          opacity: 0,
          transform: 'scale(0)' 
        })
      ),
    ], { optional: true}),

    query(':enter', [
      group([
        animate(animationTimeLength + ' ease', style({ opacity: 1, transform: 'scale(1)' })),
        query(':enter .card', stagger(100, [
          animate('350ms', 
            style({
              opacity: 1,
            }))
          ]),
        ),
      ])
    ], { optional: true}),
  ]);
}