import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{f as s,F as a,u as k,c as A}from"./index.esm-BP2dX5fD.js";import"./index-D4H_InIO.js";const K={title:"Components/InputSlider",component:s,parameters:{layout:"centered"},tags:["autodocs"]},n=({children:r})=>{const $=k();return e.jsx("div",{style:{width:"360px",padding:"40px"},children:e.jsx(A,{onSubmit:O=>console.log(O),form:$,children:r})})},m={args:{name:"slider",min:0,max:100,step:1,value:50,showValue:!0},render:r=>e.jsx(n,{children:e.jsx(a,{name:"slider",label:"Slider",message:"This is a message",children:e.jsx(s,{...r})})})},l={args:{name:"slider",min:0,max:1e3,step:10,value:500,showValue:!0},render:r=>e.jsx(n,{children:e.jsx(a,{name:"slider",label:"Slider",message:"This is a message",children:e.jsx(s,{...r})})})},i={args:{name:"slider",min:0,max:100,step:1,value:50,showValue:!0,formatValue:r=>`${r}%`},render:r=>e.jsx(n,{children:e.jsx(a,{name:"slider",label:"Slider",message:"This is a message",children:e.jsx(s,{...r})})})},t={args:{name:"slider",min:0,max:100,step:1,value:50,showValue:!1},render:r=>e.jsx(n,{children:e.jsx(a,{name:"slider",label:"Slider",message:"This is a message",children:e.jsx(s,{...r})})})},d={args:{name:"slider",min:0,max:100,step:1,value:50,disabled:!0},render:r=>e.jsx(n,{children:e.jsx(a,{name:"slider",label:"Slider",message:"This is a message",children:e.jsx(s,{...r})})})},o={args:{name:"slider",min:0,max:100,step:1,value:50,helperText:"Select a value between 0 and 100"},render:r=>e.jsx(n,{children:e.jsx(a,{name:"slider",label:"Slider",message:"This is a message",children:e.jsx(s,{...r})})})},u={args:{name:"slider",min:0,max:100,step:1,value:50,status:"error",helperText:"This field is required"},render:r=>e.jsx(n,{children:e.jsx(a,{name:"slider",label:"Slider",message:"This is a message",status:"error",children:e.jsx(s,{...r})})})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[e.jsx(s,{name:"small",min:0,max:100,value:50,size:"small",showValue:!0}),e.jsx(s,{name:"medium",min:0,max:100,value:50,size:"medium",showValue:!0}),e.jsx(s,{name:"large",min:0,max:100,value:50,size:"large",showValue:!0})]})};var c,g,x;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'slider',
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    showValue: true
  },
  render: args => <InputWrapper>
            <FormItem name='slider' label='Slider' message='This is a message'>
                <InputSlider {...args} />
            </FormItem>
        </InputWrapper>
}`,...(x=(g=m.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,I,S;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'slider',
    min: 0,
    max: 1000,
    step: 10,
    value: 500,
    showValue: true
  },
  render: args => <InputWrapper>
            <FormItem name='slider' label='Slider' message='This is a message'>
                <InputSlider {...args} />
            </FormItem>
        </InputWrapper>
}`,...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var j,v,W;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'slider',
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    showValue: true,
    formatValue: value => \`\${value}%\`
  },
  render: args => <InputWrapper>
            <FormItem name='slider' label='Slider' message='This is a message'>
                <InputSlider {...args} />
            </FormItem>
        </InputWrapper>
}`,...(W=(v=i.parameters)==null?void 0:v.docs)==null?void 0:W.source}}};var T,b,f;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'slider',
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    showValue: false
  },
  render: args => <InputWrapper>
            <FormItem name='slider' label='Slider' message='This is a message'>
                <InputSlider {...args} />
            </FormItem>
        </InputWrapper>
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var F,w,V;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: 'slider',
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    disabled: true
  },
  render: args => <InputWrapper>
            <FormItem name='slider' label='Slider' message='This is a message'>
                <InputSlider {...args} />
            </FormItem>
        </InputWrapper>
}`,...(V=(w=d.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};var z,D,y;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'slider',
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    helperText: 'Select a value between 0 and 100'
  },
  render: args => <InputWrapper>
            <FormItem name='slider' label='Slider' message='This is a message'>
                <InputSlider {...args} />
            </FormItem>
        </InputWrapper>
}`,...(y=(D=o.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var C,E,R;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'slider',
    min: 0,
    max: 100,
    step: 1,
    value: 50,
    status: 'error',
    helperText: 'This field is required'
  },
  render: args => <InputWrapper>
            <FormItem name='slider' label='Slider' message='This is a message' status='error'>
                <InputSlider {...args} />
            </FormItem>
        </InputWrapper>
}`,...(R=(E=u.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var q,H,_;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '300px'
  }}>
            <InputSlider name='small' min={0} max={100} value={50} size='small' showValue />
            <InputSlider name='medium' min={0} max={100} value={50} size='medium' showValue />
            <InputSlider name='large' min={0} max={100} value={50} size='large' showValue />
        </div>
}`,...(_=(H=p.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};const L=["Default","WithCustomRange","WithCustomFormat","WithoutValue","Disabled","WithHelperText","Error","DifferentSizes"];export{m as Default,p as DifferentSizes,d as Disabled,u as Error,i as WithCustomFormat,l as WithCustomRange,o as WithHelperText,t as WithoutValue,L as __namedExportsOrder,K as default};
