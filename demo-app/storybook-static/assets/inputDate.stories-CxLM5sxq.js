import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{F as i,u as D,c as I}from"./index.esm-BP2dX5fD.js";import{L as n}from"./index.esm-B8kfwG58.js";import"./index-D4H_InIO.js";const b={title:"Components/InputDate",parameters:{layout:"centered"},component:n,tags:["autodocs"],argTypes:{status:{control:"select"},size:{control:"select"}}},c=({children:a})=>{const d=D();return e.jsx("div",{style:{width:"360px",padding:"40px"},children:e.jsx(I,{onSubmit:g=>console.log(g),form:d,children:a})})},r={render:({...a})=>e.jsx(c,{children:e.jsx(i,{name:"input",label:"Input Label",message:"This is a message",children:e.jsx(n,{...a})})}),args:{status:"default",size:"medium",inputName:"date",placeHolder:"Select date",valueFormat:"DD/MM/YYYY",showLunarDate:!0,lunarFormat:"name",showToday:!0,locale:"vi-VN"}},t={args:{status:"error",size:"medium",placeHolder:"Enter your text",inputName:"date",valueFormat:"DD/MM/YYYY",showLunarDate:!0},render:({...a})=>e.jsx(c,{children:e.jsx(i,{status:"error",name:"input",label:"Input Label",message:"This is a error message",children:e.jsx(n,{...a})})})};var s,o,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem name='input' label='Input Label' message='This is a message'>
                <InputDatePicker {...args} />
            </FormItem>
        </InputWrapper>,
  args: {
    status: 'default',
    size: 'medium',
    inputName: 'date',
    placeHolder: 'Select date',
    valueFormat: 'DD/MM/YYYY',
    showLunarDate: true,
    // value?: Date,
    // onChange?: (date: Date) => void;
    // localeOptions?: Intl.DateTimeFormatOptions;
    // calendarIcon?: React.ReactNode;
    // label?: string;
    // inputName?: string;
    // required?: boolean;
    // maxDate?: Date;
    // minDate?: Date;
    lunarFormat: 'name',
    showToday: true,
    locale: 'vi-VN'
  }
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};var u,l,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: 'error',
    size: 'medium',
    placeHolder: 'Enter your text',
    inputName: 'date',
    valueFormat: 'DD/MM/YYYY',
    showLunarDate: true
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='error' name='input' label='Input Label' message='This is a error message'>
                <InputDatePicker {...args} />
            </FormItem>
        </InputWrapper>
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const j=["Default","Error"];export{r as Default,t as Error,j as __namedExportsOrder,b as default};
