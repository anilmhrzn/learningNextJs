import React from "react";

const Docs = ({
  params,
}: {
  params: {
    slug: String;
  };
}) => {
  if (params.slug?.length === 2) {
    return <div>this is content of feature {params.slug[0]} and the content is {params.slug[1]}</div>
  } else if (params.slug?.length === 1) {
    return <div>this is {params.slug[0]} feature</div>
  }
  return <div>Docs page</div>;
};

export default Docs;
