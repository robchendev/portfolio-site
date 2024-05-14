import React from "react";

const SVGfret = ({ size = 250, className = "" }: { size?: number; className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 187 262"
      fill="none"
      className={className}
    >
      <path
        fill="#E6E2D6"
        fillRule="evenodd"
        stroke="#E6E2D6"
        strokeWidth={5}
        d="M100.362 81.14c-4.078.19-11.896.301-17.372.248l-9.957-.097.09 5.085c.051 2.796.135 15.427.187 28.07l.096 22.986h10.073l-.114-11.683c-.095-9.788-.015-11.751.497-12.1.377-.258 5.15-.368 12.474-.287l11.864.131.077-4.555.077-4.555-2.407-.003c-1.324-.001-6.776.217-12.115.483-9.233.462-9.735.448-10.275-.29-.727-.995-.806-12.935-.094-14.265.471-.88.564-.884 14.252-.589l13.777.297-.278-1.741a96.899 96.899 0 0 1-.546-4.362c-.279-2.737-.632-3.286-2.044-3.181-.466.034-4.184.218-8.262.408Z"
        clipRule="evenodd"
      />
      <path
        fill="#252E3F"
        fillRule="evenodd"
        d="M86.38.173c-6.563.634-12.924 2.725-27.965 9.19-18.437 7.924-24.917 10.105-31.46 10.584-1.806.132-3.283.285-3.283.34 0 .053 1.227 5.127 2.728 11.273 1.5 6.146 2.857 11.89 3.013 12.763l.285 1.59h-1.571c-1.228 0-1.99-.369-3.481-1.682-2.463-2.168-7.065-3.935-13.803-5.299-8.682-1.758-9.05-1.61-10.252 4.113-.934 4.45-.729 13.61.385 17.168 1.065 3.402 1.839 3.738 6.702 2.91 8.92-1.521 14.432-3.515 17.58-6.359 1.517-1.37 1.94-1.53 4.044-1.53h2.35l.477 2.224c1.59 7.4 6.372 38.304 6.372 41.176 0 1.014-.136 1.088-1.995 1.088-1.698 0-2.217-.216-3.495-1.454-2.84-2.751-8.634-4.903-17.254-6.405-5.581-.973-6.044-.734-7.181 3.704-1.096 4.279-1.038 13.766.108 17.699 1.107 3.798 1.852 4.186 6.575 3.424 8.08-1.302 14.827-3.694 17.81-6.313 1.35-1.185 1.808-1.333 4.111-1.333 1.426 0 2.592.107 2.592.238 0 .132.378 4.755.84 10.275.928 11.106 1.696 24.676 1.7 30.056l.002 3.496h-1.65c-1.025 0-1.735-.225-1.877-.596-.377-.983-3.902-3.181-6.955-4.337-3.621-1.372-11.745-3.118-14.508-3.118-2.626 0-3.108.628-4.076 5.31-1.288 6.226-.19 18.12 1.808 19.58.961.704 3.01.672 7.133-.112 7.893-1.499 14.454-4.081 16.285-6.408.604-.768 1.199-.998 2.582-.998h1.798l-.301 12.393-.302 12.394 7.235 10.498 7.234 10.498V262h66.521v-53.9l1.201-1.544c.66-.849 3.901-5.482 7.203-10.295l6.002-8.75V162.43h1.538c1.158 0 1.937.361 3.159 1.465 2.813 2.542 6.998 4.193 14.522 5.731 5.26 1.076 7.544 1.101 8.454.096 2.895-3.2 2.785-21.388-.145-24.04-1.126-1.019-5.387-.663-11.866.991-5.462 1.394-9.325 3.163-11.186 5.125-.979 1.031-1.599 1.311-2.908 1.311h-1.663l.28-6.462c.582-13.407 2.135-35.731 2.579-37.074.115-.347 1.071-.529 2.772-.529 2.422 0 2.724.112 4.506 1.681 1.134.998 3.251 2.198 5.213 2.954 3.349 1.292 12.789 3.415 15.183 3.415 2.986 0 4.097-3.627 4.088-13.347-.007-7.35-.735-10.722-2.577-11.93-1.009-.66-1.358-.657-5.392.046-8.527 1.486-14.031 3.532-17.196 6.391-1.371 1.239-1.938 1.468-3.626 1.468h-2.001l.285-2.224c1.678-13.117 5.416-36.543 6.503-40.762.317-1.226.453-1.297 2.737-1.417 2.255-.12 2.496-.036 3.88 1.348 2.038 2.038 6.091 3.871 11.298 5.11 10.631 2.53 11.805 2.433 12.842-1.06 1.68-5.657 1.823-12.422.395-18.739-.907-4.016-1.615-4.442-6.264-3.77-7.939 1.148-14.986 3.624-18.102 6.36-1.119.983-1.945 1.344-3.072 1.344-1.381 0-1.518-.099-1.32-.953.121-.524.885-3.865 1.698-7.423a637.396 637.396 0 0 1 2.754-11.52c.701-2.78 1.275-5.254 1.275-5.501 0-.255-.902-.449-2.091-.449-5.83 0-14.368-2.844-33.704-11.229C103.502 1.467 95.086-.67 86.379.173Zm24.175 81.33c.408.792 1.169 7.655.926 8.347-.135.385-3.562.489-14.017.424l-13.839-.085-.116 7.106c-.1 6.167-.027 7.141.556 7.365.37.141 5.915.016 12.324-.28 6.765-.311 11.798-.379 12-.161.19.207.247 2.455.126 4.997l-.22 4.621-10.852-.215c-5.969-.118-11.52-.1-12.335.04l-1.483.254v23.728l-4.872.028c-2.68.016-5.11-.15-5.4-.367-.486-.366-.46-8.541.071-22.329.059-1.515-.153-9.605-.47-17.977-.316-8.373-.421-15.377-.233-15.566.188-.188 6.914-.398 14.945-.467 22.494-.191 22.515-.19 22.889.537Z"
        clipRule="evenodd"
      />
      <path
        fill="#B36263"
        fillRule="evenodd"
        d="M154.987 26.116c-.376 1.398-3.124 13.09-4.429 18.843-.195.861-.058.953 1.421.953 1.126 0 1.889-.278 2.444-.891.444-.49 1.57-1.34 2.502-1.89l1.696-.998 2.053-8.52c1.129-4.688 1.987-8.577 1.906-8.645-.08-.068-1.713-.238-3.629-.38l-3.483-.256-.481 1.784Zm24.877 16.735c-.111.181.003 1.94.254 3.908.509 3.989.007 9.962-1.169 13.896-.973 3.257-1.601 3.407-8.566 2.045-3.085-.604-6.649-1.449-7.919-1.877-2.132-.72-2.281-.724-1.925-.06.607 1.134 4.362 3.353 7.55 4.462 4.709 1.638 14.031 3.322 15.402 2.783 1.368-.537 2.184-2.897 2.923-8.452.803-6.038-.464-15.12-2.288-16.398-.947-.663-3.909-.877-4.262-.307ZM25.551 56.533c-1.793 1.874-6.527 4.06-11.413 5.268-2.33.577-4.618 1.055-5.084 1.06-.466.007-1.12.185-1.454.396-.882.558.114 3.637 1.463 4.52.945.62 1.368.62 4.97.006 8.437-1.438 14.176-3.429 17.16-5.952 1.535-1.299 1.564-1.441.917-4.458l-.459-2.14h-2.427c-2.157 0-2.567.146-3.672 1.3Zm122.955-.963c-.774 1.252-7.045 40.22-7.045 43.778 0 .206.905.37 2.012.363 1.709-.01 2.256-.237 3.62-1.506l1.608-1.494 1.25-8.558c1.27-8.693 3.975-24.518 4.581-26.796.308-1.16.494-1.26 2.558-1.38l2.226-.129-2.507-1.62c-1.379-.892-2.626-1.93-2.771-2.308-.202-.527-.851-.686-2.794-.686-1.392 0-2.624.15-2.738.336Zm24.092 40.663c-.258.188-.426 3.006-.424 7.091.007 10.174-1.061 13.77-4.089 13.77-2.394 0-11.834-2.123-15.183-3.415-1.961-.756-4.079-1.956-5.213-2.954-1.782-1.569-2.084-1.681-4.506-1.681-1.701 0-2.657.182-2.771.529-.445 1.343-1.998 23.667-2.58 37.074l-.28 6.462 1.636-.011c1.311-.008 1.983-.337 3.37-1.647l1.734-1.637.287-6.509c.278-6.286 1.278-20.316 1.883-26.423l.295-2.966 2.665-.126c2.582-.123 2.727-.073 4.599 1.574 1.158 1.02 3.258 2.213 5.237 2.976 3.349 1.292 12.788 3.415 15.182 3.415 2.987 0 4.097-3.628 4.089-13.347-.008-9.113-1.214-12.512-4.432-12.493-.589.004-1.263.147-1.499.318ZM33.453 110.064c-2.175 2.316-9.138 5.032-15.934 6.215-2.67.465-2.733.506-2.468 1.6.918 3.801 1.768 4.245 6.621 3.463 5.375-.866 10.81-2.418 14.1-4.025 4.21-2.055 4.543-2.509 4.183-5.687l-.292-2.586h-2.626c-2.225 0-2.771.155-3.584 1.02Zm133.733 41.879c.866 5.798-.198 15.935-1.866 17.779-.453.5-1.294.758-2.469.758-2.224 0-9.677-1.5-12.813-2.579-2.985-1.027-2.994-1.025-1.766.289 2.33 2.495 7.324 4.539 14.83 6.07 5.401 1.101 7.658 1.133 8.573.122 2.811-3.106 2.811-20.798 0-23.904-.481-.532-1.305-.759-2.754-.759h-2.068l.333 2.224Zm-128.758 11.49c-1.62 2.231-10.085 5.521-16.557 6.436-2.166.306-2.235.431-1.568 2.831.724 2.609 2.239 2.941 8.201 1.8 5.407-1.035 8.33-1.873 11.374-3.263l2.86-1.306V162.43l-1.8.013c-1.384.011-1.966.24-2.51.99Zm99.219 11.537v12.541l-6.002 8.75c-3.302 4.813-6.543 9.446-7.203 10.295l-1.201 1.544V262h6.356V212.761l1.2-1.544c.66-.849 3.902-5.482 7.203-10.295l6.003-8.751v-25.08l1.589-.004 1.589-.004-2.119-1.222c-1.165-.672-2.581-1.719-3.145-2.327-.762-.818-1.447-1.104-2.649-1.104h-1.621v12.54Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default SVGfret;
