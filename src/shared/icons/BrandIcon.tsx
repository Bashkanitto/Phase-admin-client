import { SVGProps } from 'react'

export const BrandIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      {/* Replace this path with the brand's SVG path */}
      <path
        d='M5.026 15c6.042 0 9.349-5.018 9.349-9.349 0-.142-.003-.283-.01-.423A6.69 6.69 0 0 0 16 4.39a6.63 6.63 0 0 1-1.889.518A3.3 3.3 0 0 0 15.557 3c-1.148 0-2.178.65-2.693 1.619A3.273 3.273 0 0 0 9.95 5.674c-1.804 0-3.403 1.486-3.403 3.31 0 .258.029.507.085.746A9.435 9.435 0 0 1 1.13 3.804a3.272 3.272 0 0 0-.46 1.668c0 1.156.587 2.181 1.479 2.779A3.237 3.237 0 0 1 .64 7.697v.045c0 1.694 1.205 3.116 2.81 3.448-.294.08-.604.123-.922.123-.225 0-.445-.022-.662-.064a3.296 3.296 0 0 0 3.065 2.281A6.64 6.64 0 0 1 0 13.765a9.363 9.363 0 0 0 5.026 1.48'
        fill='currentColor'
      />
    </svg>
  )
}
