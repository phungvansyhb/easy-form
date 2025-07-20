import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{I as r,F as a}from"./index.esm-BP2dX5fD.js";import{F as _}from"./CurrencyDollarIcon-CgG3nIya.js";import"./index-D4H_InIO.js";const A={title:"Components/InputNumber",parameters:{layout:"centered"},component:r,tags:["autodocs"],argTypes:{status:{control:"select"},size:{control:"select"}}},n=({children:s})=>e.jsx("div",{style:{width:"360px",padding:"40px"},children:s}),t={render:({...s})=>e.jsx(n,{children:e.jsx(a,{name:"input",label:"Input Label",message:"This is a message",children:e.jsx(r,{...s})})}),args:{status:"default",size:"medium",placeholder:"Enter your number"}},u={args:{status:"error",size:"medium",placeholder:"Enter your number",icon:e.jsx(_,{}),maxLength:100,helperText:"This is a helper text"},render:({...s})=>e.jsx(n,{children:e.jsx(a,{status:"error",name:"input",label:"Input Label",message:"This is a error message",children:e.jsx(r,{...s})})})},m={args:{status:"success",size:"medium",placeholder:"Enter your number"},render:({...s})=>e.jsx(n,{children:e.jsx(a,{status:"success",name:"input",label:"Input Label",message:"This is a success message",children:e.jsx(r,{...s})})})},p={args:{status:"warning",size:"medium",placeholder:"Enter your number"},render:({...s})=>e.jsx(n,{children:e.jsx(a,{status:"warning",name:"input",label:"Input Label",message:"This is a warning message",children:e.jsx(r,{...s})})})},l={args:{status:"default",size:"medium",disabled:!0,icon:e.jsx(_,{}),placeholder:"Search..."},render:({...s})=>e.jsx(n,{children:e.jsx(a,{status:"default",name:"input",label:"Input Label",message:"This is a default message",children:e.jsx(r,{...s,maxLength:50})})})},o={args:{status:"default",size:"medium",placeholder:"Search...",icon:"cm"},render:({...s})=>e.jsx(n,{children:e.jsx(a,{status:"default",name:"input",label:"Input Label",message:"This is a default message",children:e.jsx(r,{...s,maxLength:50})})})},i={args:{status:"default",size:"medium",helperText:"Please enter your username",placeholder:"Username"},render:({...s})=>e.jsx(n,{children:e.jsx(a,{status:"default",name:"input",label:"Input Label",message:"This is a default message",children:e.jsx(r,{...s,maxLength:50})})})},c={args:{status:"default",size:"medium",maxLength:100,helperText:"This is a helper text",placeholder:"Enter text..."},render:({...s})=>e.jsx(n,{children:e.jsx(a,{status:"default",name:"input",label:"Input Label",message:"This is a default message",children:e.jsx(r,{...s})})})};var d,g,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem name='input' label='Input Label' message='This is a message'>
                <InputNumber {...args} />
            </FormItem>
        </InputWrapper>,
  args: {
    status: 'default',
    size: 'medium',
    placeholder: 'Enter your number'
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var I,x,b;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: 'error',
    size: 'medium',
    placeholder: 'Enter your number',
    icon: <CurrencyDollarIcon />,
    maxLength: 100,
    helperText: 'This is a helper text'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='error' name='input' label='Input Label' message='This is a error message'>
                <InputNumber {...args} />
            </FormItem>
        </InputWrapper>
}`,...(b=(x=u.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var f,j,T;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: 'success',
    size: 'medium',
    placeholder: 'Enter your number'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='success' name='input' label='Input Label' message='This is a success message'>
                <InputNumber {...args} />
            </FormItem>
        </InputWrapper>
}`,...(T=(j=m.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var W,L,F;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    size: 'medium',
    placeholder: 'Enter your number'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='warning' name='input' label='Input Label' message='This is a warning message'>
                <InputNumber {...args} />
            </FormItem>
        </InputWrapper>
}`,...(F=(L=p.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var z,y,E;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    status: 'default',
    size: 'medium',
    disabled: true,
    icon: <CurrencyDollarIcon />,
    placeholder: 'Search...'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='default' name='input' label='Input Label' message='This is a default message'>
                <InputNumber {...args} maxLength={50} />
            </FormItem>
        </InputWrapper>
}`,...(E=(y=l.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var S,N,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: 'default',
    size: 'medium',
    placeholder: 'Search...',
    icon: 'cm'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='default' name='input' label='Input Label' message='This is a default message'>
                <InputNumber {...args} maxLength={50} />
            </FormItem>
        </InputWrapper>
}`,...(w=(N=o.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var D,C,H;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    status: 'default',
    size: 'medium',
    helperText: 'Please enter your username',
    placeholder: 'Username'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='default' name='input' label='Input Label' message='This is a default message'>
                <InputNumber {...args} maxLength={50} />
            </FormItem>
        </InputWrapper>
}`,...(H=(C=i.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var P,R,U;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    status: 'default',
    size: 'medium',
    maxLength: 100,
    helperText: 'This is a helper text',
    placeholder: 'Enter text...'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='default' name='input' label='Input Label' message='This is a default message'>
                <InputNumber {...args} />
            </FormItem>
        </InputWrapper>
}`,...(U=(R=c.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};const B=["Default","Error","Success","Warning","Disable","WithIcon","WithHelperText","WithWordCount"];export{t as Default,l as Disable,u as Error,m as Success,p as Warning,i as WithHelperText,o as WithIcon,c as WithWordCount,B as __namedExportsOrder,A as default};
