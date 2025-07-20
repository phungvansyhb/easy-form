import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{i as r,F as a,u as _,c as A}from"./index.esm-BP2dX5fD.js";import{r as g}from"./index-D4H_InIO.js";import{F as V}from"./CurrencyDollarIcon-CgG3nIya.js";function B({title:s,titleId:n,...h},X){return g.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:X,"aria-labelledby":n},h),s?g.createElement("title",{id:n},s):null,g.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 3.75 18 6m0 0 2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"}))}const Z=g.forwardRef(B),K={title:"Components/InputText",parameters:{layout:"centered"},component:r,tags:["autodocs"],argTypes:{status:{control:"select"},size:{control:"select"}}},t=({children:s})=>{const n=_();return e.jsx("div",{style:{width:"360px",padding:"40px"},children:e.jsx(A,{onSubmit:h=>console.log(h),form:n,children:s})})},u={render:({...s})=>e.jsx(t,{children:e.jsx(a,{name:"input",label:"Input Label",message:"This is a message",children:e.jsx(r,{...s})})}),args:{status:"default",size:"medium",placeholder:"Enter your text"}},o={args:{status:"error",size:"medium",placeholder:"Enter your text",iconPrefix:e.jsx(Z,{}),showWordCount:!0,maxLength:100,helperText:"This is a helper text"},render:({...s})=>e.jsx(t,{children:e.jsx(a,{status:"error",name:"input",label:"Input Label",message:"This is a error message",children:e.jsx(r,{...s})})})},m={args:{status:"success",size:"medium",placeholder:"Enter your text"},render:({...s})=>e.jsx(t,{children:e.jsx(a,{status:"success",name:"input",label:"Input Label",message:"This is a success message",children:e.jsx(r,{...s})})})},l={args:{status:"warning",size:"medium",placeholder:"Enter your text"},render:({...s})=>e.jsx(t,{children:e.jsx(a,{status:"warning",name:"input",label:"Input Label",message:"This is a warning message",children:e.jsx(r,{...s})})})},i={args:{status:"default",size:"medium",disabled:!0,iconSuffix:e.jsx(V,{}),placeholder:"Search..."},render:({...s})=>e.jsx(t,{children:e.jsx(a,{status:"default",name:"input",label:"Input Label",message:"This is a default message",children:e.jsx(r,{...s,maxLength:50})})})},p={args:{status:"default",size:"medium",iconSuffix:e.jsx(V,{}),placeholder:"Search..."},render:({...s})=>e.jsx(t,{children:e.jsx(a,{status:"default",name:"input",label:"Input Label",message:"This is a default message",children:e.jsx(r,{...s,maxLength:50})})})},c={args:{status:"default",size:"medium",helperText:"Please enter your username",placeholder:"Username"},render:({...s})=>e.jsx(t,{children:e.jsx(a,{status:"default",name:"input",label:"Input Label",message:"This is a default message",children:e.jsx(r,{...s,maxLength:50})})})},d={args:{status:"default",size:"medium",maxLength:100,showWordCount:!0,helperText:"This is a helper text",placeholder:"Enter text..."},render:({...s})=>e.jsx(t,{children:e.jsx(a,{status:"default",name:"input",label:"Input Label",message:"This is a default message",children:e.jsx(r,{...s})})})};var x,I,f;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem name='input' label='Input Label' message='This is a message'>
                <InputText {...args} />
            </FormItem>
        </InputWrapper>,
  args: {
    status: 'default',
    size: 'medium',
    placeholder: 'Enter your text'
  }
}`,...(f=(I=u.parameters)==null?void 0:I.docs)==null?void 0:f.source}}};var b,T,j;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    status: 'error',
    size: 'medium',
    placeholder: 'Enter your text',
    iconPrefix: <PhoneXMarkIcon />,
    showWordCount: true,
    maxLength: 100,
    helperText: 'This is a helper text'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='error' name='input' label='Input Label' message='This is a error message'>
                <InputText {...args} />
            </FormItem>
        </InputWrapper>
}`,...(j=(T=o.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var W,L,F;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    status: 'success',
    size: 'medium',
    placeholder: 'Enter your text'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='success' name='input' label='Input Label' message='This is a success message'>
                <InputText {...args} />
            </FormItem>
        </InputWrapper>
}`,...(F=(L=m.parameters)==null?void 0:L.docs)==null?void 0:F.source}}};var w,S,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    size: 'medium',
    placeholder: 'Enter your text'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='warning' name='input' label='Input Label' message='This is a warning message'>
                <InputText {...args} />
            </FormItem>
        </InputWrapper>
}`,...(E=(S=l.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var z,y,C;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    status: 'default',
    size: 'medium',
    disabled: true,
    iconSuffix: <CurrencyDollarIcon />,
    placeholder: 'Search...'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='default' name='input' label='Input Label' message='This is a default message'>
                <InputText {...args} maxLength={50} />
            </FormItem>
        </InputWrapper>
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var k,D,P;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    status: 'default',
    size: 'medium',
    iconSuffix: <CurrencyDollarIcon />,
    placeholder: 'Search...'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='default' name='input' label='Input Label' message='This is a default message'>
                <InputText {...args} maxLength={50} />
            </FormItem>
        </InputWrapper>
}`,...(P=(D=p.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var M,v,R;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
                <InputText {...args} maxLength={50} />
            </FormItem>
        </InputWrapper>
}`,...(R=(v=c.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var H,O,U;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    status: 'default',
    size: 'medium',
    maxLength: 100,
    showWordCount: true,
    helperText: 'This is a helper text',
    placeholder: 'Enter text...'
  },
  render: ({
    ...args
  }) => <InputWrapper>
            <FormItem status='default' name='input' label='Input Label' message='This is a default message'>
                <InputText {...args} />
            </FormItem>
        </InputWrapper>
}`,...(U=(O=d.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const N=["Default","Error","Success","Warning","Disable","WithIcon","WithHelperText","WithWordCount"];export{u as Default,i as Disable,o as Error,m as Success,l as Warning,c as WithHelperText,p as WithIcon,d as WithWordCount,N as __namedExportsOrder,K as default};
