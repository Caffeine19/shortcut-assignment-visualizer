import { Component } from 'solid-js';
import { twJoin } from 'tailwind-merge';

interface BuiltInMarkProps {
  size?: 'sm' | 'md' | 'lg';
}

const BuiltInMark: Component<BuiltInMarkProps> = (props) => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      class={twJoin(
        'absolute right-1 bottom-1 fill-zinc-200 object-contain',
        props.size === 'sm' ? 'h-2.5 w-2.5' : 'h-4 w-4',
      )}
    >
      <g>
        <path fill="none" d="M0 0H24V24H0z" />
        <path d="M21 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h18zm-1 2h-8.465c-.69 1.977-1.035 4.644-1.035 8h3c-.115.92-.15 1.878-.107 2.877 1.226-.211 2.704-.777 4.027-1.71l1.135 1.665c-1.642 1.095-3.303 1.779-4.976 2.043.052.37.113.745.184 1.125H20V5zM6.555 14.168l-1.11 1.664C7.602 17.27 9.792 18 12 18v-2c-1.792 0-3.602-.603-5.445-1.832zM17 7c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1s-1-.448-1-1V8c0-.552.448-1 1-1zM7 7c-.552 0-1 .452-1 1v1c0 .552.448 1 1 1s1-.45 1-1V8c0-.552-.448-1-1-1z" />
      </g>
    </svg>
  );
};

export default BuiltInMark;
