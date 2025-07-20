import{j as r}from"./jsx-runtime-BO8uF4Og.js";import{b as f}from"./index.esm-BP2dX5fD.js";import{r as z}from"./index-D4H_InIO.js";const q={title:"Components/InputCheckbox",component:f,parameters:{layout:"centered"},tags:["autodocs"]},i=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],o=e=>{const[j,I]=z.useState([]);return r.jsx(f,{...e,value:j,onChange:T=>I(T)})},t={render:e=>r.jsx(o,{...e}),args:{name:"checkbox-group",options:i,direction:"vertical"}},a={render:e=>r.jsx(o,{...e}),args:{name:"checkbox-group",options:i,direction:"horizontal"}},n={render:e=>r.jsx(o,{...e}),args:{name:"checkbox-group",options:i,helperText:"Please select at least one option"}},s={render:e=>r.jsx(o,{...e}),args:{name:"checkbox-group",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2",disabled:!0},{value:"option3",label:"Option 3"}]}},p={render:e=>r.jsx(o,{...e}),args:{name:"checkbox-group",options:i,status:"error",size:"large",helperText:"This field is required"}};var c,l,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <InputCheckboxWithState {...args} />,
  args: {
    name: 'checkbox-group',
    options,
    direction: 'vertical'
  }
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,m,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <InputCheckboxWithState {...args} />,
  args: {
    name: 'checkbox-group',
    options,
    direction: 'horizontal'
  }
}`,...(g=(m=a.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,x,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <InputCheckboxWithState {...args} />,
  args: {
    name: 'checkbox-group',
    options,
    helperText: 'Please select at least one option'
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var k,v,O;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <InputCheckboxWithState {...args} />,
  args: {
    name: 'checkbox-group',
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
  }
}`,...(O=(v=s.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var S,C,W;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <InputCheckboxWithState {...args} />,
  args: {
    name: 'checkbox-group',
    options,
    status: 'error',
    size: 'large',
    helperText: 'This field is required'
  }
}`,...(W=(C=p.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};const P=["Default","Horizontal","WithHelperText","WithDisabledOption","Error"];export{t as Default,p as Error,a as Horizontal,s as WithDisabledOption,n as WithHelperText,P as __namedExportsOrder,q as default};
