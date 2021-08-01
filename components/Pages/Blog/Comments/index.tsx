import { useEffect, FC } from "react";
import { useRouter } from "next/router";

import { BlogCommentsWrapper, BlogCommentsTitle } from "./styled";

interface PropTypes {
  url: string;
}

declare const window: Window &
  typeof globalThis & {
    FB: any;
  };

const BlogComments: FC<PropTypes> = ({ url }) => {
  const router = useRouter();

  useEffect(() => {
    window.FB.XFBML.parse();
  }, [router.pathname]);

  return (
    <BlogCommentsWrapper>
      <BlogCommentsTitle>Comments</BlogCommentsTitle>
      <div
        className="fb-comments"
        data-href={url}
        data-numposts="5"
        data-width="100%"
      />
    </BlogCommentsWrapper>
  );
};

export default BlogComments;