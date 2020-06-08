import React, { Fragment } from "react";
import { Text, FlexProps } from "@mpkelly/siam";

export interface CreateTemplateInfoProps extends FlexProps {}

export const CreateTemplateInfo = (props: CreateTemplateInfoProps) => {
  return (
    <Fragment>
      <Text as="paragraph" mt="lg" color="secondary.text">
        Templates are great for producing standard documents like invoices or
        cover letters. They are best used along with placeholders and variables
        that allow you to insert dynamic content.
      </Text>
      <Text as="paragraph" mt="lg" color="secondary.text">
        You can add a placeholder by using text like{" "}
        <code>&#123;client-name&#125;</code>. You will then be asked for a value
        for <code>client-name</code> the next time you create a document from
        the template.
      </Text>
      <Text as="paragraph" mt="lg" color="secondary.text">
        Variables work like placeholders but you need to use double brackets
        e.g. <code>&#123;&#123;invoice-number&#125;&#125;</code>. Just make sure
        you have first defined a Journal variable on the Settings page or are
        using a built-in varaible, like
        <code>&#123;&#123;date-today&#125;&#125;</code>, for today's date.
      </Text>
    </Fragment>
  );
};
