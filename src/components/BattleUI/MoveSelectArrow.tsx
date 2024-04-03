const MoveSelector = ({ size = 50, className }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 256 256"
    width={size}
    height={size}
    className={className}
    fill="" // TODO
  >
    <path d="M170.9 117.3V95.8h-21.5V74.4H128V52.9h-21.5V31.5H85.1V10H63.6v236h21.5v-21.5h21.5V203H128v-21.5h21.5V160H171v-21.5h21.5V117l-21.6.3z" />
  </svg>
);
export default MoveSelector;
