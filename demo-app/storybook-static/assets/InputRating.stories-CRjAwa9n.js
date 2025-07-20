import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{e as a,F as s,u as L,c as N}from"./index.esm-BP2dX5fD.js";import"./index-D4H_InIO.js";const q={title:"Components/InputRating",component:a,parameters:{layout:"centered"},tags:["autodocs"]},n=({children:r})=>{const M=L();return e.jsx("div",{style:{width:"360px",padding:"40px"},children:e.jsx(N,{onSubmit:y=>console.log(y),form:M,children:r})})},t={args:{value:3.5},render:r=>e.jsx(n,{children:e.jsx(s,{name:"rating",label:"Rating",message:"This is a message",children:e.jsx(a,{...r})})})},m={args:{value:3,allowHalf:!1},render:r=>e.jsx(n,{children:e.jsx(s,{name:"rating",label:"Rating",message:"This is a message",children:e.jsx(a,{...r})})})},i={args:{value:4,activeColor:"#ff4d4f",inactiveColor:"#ffa39e"},render:r=>e.jsx(n,{children:e.jsx(s,{name:"rating",label:"Rating",message:"This is a message",children:e.jsx(a,{...r})})})},l={args:{},render:()=>e.jsxs(n,{children:[e.jsx(s,{name:"rating",label:"Small",message:"This is a message",children:e.jsx(a,{size:"small",value:3})}),e.jsx(s,{name:"rating",label:"Medium",message:"This is a message",children:e.jsx(a,{size:"medium",value:3})}),e.jsx(s,{name:"rating",label:"Large",message:"This is a message",children:e.jsx(a,{size:"large",value:3})})]})},g={render:()=>e.jsxs(n,{children:[e.jsx(s,{name:"rating",label:"Rating",status:"default",message:"This is a message",children:e.jsx(a,{status:"default",value:3,helperText:"Default status"})}),e.jsx(s,{name:"rating",label:"Error",status:"error",message:"This is a message",children:e.jsx(a,{status:"error",value:3,helperText:"Error status"})}),e.jsx(s,{name:"rating",label:"Warning",status:"warning",message:"This is a message",children:e.jsx(a,{status:"warning",value:3,helperText:"Warning status"})}),e.jsx(s,{name:"rating",label:"Success",status:"success",message:"This is a message",children:e.jsx(a,{status:"success",value:3,helperText:"Success status"})})]})},o={args:{value:3.5,disabled:!0},render:r=>e.jsx(n,{children:e.jsx(s,{name:"rating",label:"Rating",message:"This is a message",children:e.jsx(a,{...r})})})},u={args:{value:7,maxRating:10},render:r=>e.jsx(n,{children:e.jsx(s,{name:"rating",label:"Rating",message:"This is a message",children:e.jsx(a,{...r})})})};var p,c,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 3.5
  },
  render: args => <InputWrapper>
            <FormItem name='rating' label='Rating' message='This is a message'>
                <InputRating {...args} />
            </FormItem>
        </InputWrapper>
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var I,h,x;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    value: 3,
    allowHalf: false
  },
  render: args => <InputWrapper>
            <FormItem name='rating' label='Rating' message='This is a message'>
                <InputRating {...args} />
            </FormItem>
        </InputWrapper>
}`,...(x=(h=m.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,T,R;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    value: 4,
    activeColor: '#ff4d4f',
    inactiveColor: '#ffa39e'
  },
  render: args => <InputWrapper>
            <FormItem name='rating' label='Rating' message='This is a message'>
                <InputRating {...args} />
            </FormItem>
        </InputWrapper>
}`,...(R=(T=i.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var b,v,f;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {},
  render: () => <InputWrapper>
            <FormItem name='rating' label='Small' message='This is a message'>
                <InputRating size='small' value={3} />
            </FormItem>
            <FormItem name='rating' label='Medium' message='This is a message'>
                <InputRating size='medium' value={3} />
            </FormItem>
            <FormItem name='rating' label='Large' message='This is a message'>
                <InputRating size='large' value={3} />
            </FormItem>
        </InputWrapper>
}`,...(f=(v=l.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var F,S,W;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <InputWrapper>
            <FormItem name='rating' label='Rating' status='default' message='This is a message'>
                <InputRating status='default' value={3} helperText='Default status' />
            </FormItem>
            <FormItem name='rating' label='Error' status='error' message='This is a message'>
                <InputRating status='error' value={3} helperText='Error status' />
            </FormItem>
            <FormItem name='rating' label='Warning' status='warning' message='This is a message'>
                <InputRating status='warning' value={3} helperText='Warning status' />
            </FormItem>
            <FormItem name='rating' label='Success' status='success' message='This is a message'>
                <InputRating status='success' value={3} helperText='Success status' />
            </FormItem>
        </InputWrapper>
}`,...(W=(S=g.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var C,z,w;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 3.5,
    disabled: true
  },
  render: args => <InputWrapper>
            <FormItem name='rating' label='Rating' message='This is a message'>
                <InputRating {...args} />
            </FormItem>
        </InputWrapper>
}`,...(w=(z=o.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var D,E,H;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 7,
    maxRating: 10
  },
  render: args => <InputWrapper>
            <FormItem name='rating' label='Rating' message='This is a message'>
                <InputRating {...args} />
            </FormItem>
        </InputWrapper>
}`,...(H=(E=u.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};const A=["Default","NoHalfStars","CustomColors","Sizes","Statuses","Disabled","CustomMaxRating"];export{i as CustomColors,u as CustomMaxRating,t as Default,o as Disabled,m as NoHalfStars,l as Sizes,g as Statuses,A as __namedExportsOrder,q as default};
