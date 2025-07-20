import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{a as j}from"./index.esm-BP2dX5fD.js";import{r as E}from"./index-D4H_InIO.js";const C={title:"Components/InputRadio",component:j,parameters:{layout:"centered"},tags:["autodocs"]},p=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],a=e=>{const[I,T]=E.useState(e.value);return r.jsx(j,{...e,value:I,onChange:z=>T(z)})},o={args:{name:"radio-group",options:p,direction:"vertical"},render:e=>r.jsx(a,{...e})},t={args:{name:"radio-group",options:p,direction:"horizontal"},render:e=>r.jsx(a,{...e})},n={args:{name:"radio-group",options:p,helperText:"Please select an option"},render:e=>r.jsx(a,{...e})},s={args:{name:"radio-group",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2",disabled:!0},{value:"option3",label:"Option 3"}]},render:e=>r.jsx(a,{...e})},i={args:{name:"radio-group",options:p,status:"error",size:"large",helperText:"This field is required"},render:e=>r.jsx(a,{...e})};var l,d,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'radio-group',
    options,
    direction: 'vertical'
  },
  render: args => <InputRadioWithState {...args} />
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'radio-group',
    options,
    direction: 'horizontal'
  },
  render: args => <InputRadioWithState {...args} />
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,x,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'radio-group',
    options,
    helperText: 'Please select an option'
  },
  render: args => <InputRadioWithState {...args} />
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var v,O,S;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'radio-group',
    options: [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2',
      disabled: true
    }, {
      value: 'option3',
      label: 'Option 3'
    }]
  },
  render: args => <InputRadioWithState {...args} />
}`,...(S=(O=s.parameters)==null?void 0:O.docs)==null?void 0:S.source}}};var W,R,f;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: 'radio-group',
    options,
    status: 'error',
    size: 'large',
    helperText: 'This field is required'
  },
  render: args => <InputRadioWithState {...args} />
}`,...(f=(R=i.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const P=["Default","Horizontal","WithHelperText","WithDisabledOption","Error"];export{o as Default,i as Error,t as Horizontal,s as WithDisabledOption,n as WithHelperText,P as __namedExportsOrder,C as default};
