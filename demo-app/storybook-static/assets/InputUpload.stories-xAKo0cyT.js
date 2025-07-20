import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{h as r,F as s,u as w,c as k}from"./index.esm-BP2dX5fD.js";import"./index-D4H_InIO.js";const J={title:"Components/InputUpload",component:r,parameters:{layout:"centered"},tags:["autodocs"]},n=({children:a})=>{const L=w();return e.jsx("div",{style:{width:"360px",padding:"40px"},children:e.jsx(k,{onSubmit:_=>console.log(_),form:L,children:a})})},o={args:{name:"upload",buttonText:"Choose Files",dragText:"Drag and drop files here"},render:a=>e.jsx(n,{children:e.jsx(s,{name:"upload",label:"Upload Files",message:"This is a message",children:e.jsx(r,{...a,helperText:"This is a helper text"})})})},l={args:{name:"upload",multiple:!0,maxFiles:3,buttonText:"Choose Files",dragText:"Drag and drop up to 3 files here"},render:a=>e.jsx(n,{children:e.jsx(s,{name:"upload",label:"Upload Files",message:"This is a message",children:e.jsx(r,{...a})})})},t={args:{name:"upload",accept:"image/*",buttonText:"Choose Images",dragText:"Drag and drop images here"},render:a=>e.jsx(n,{children:e.jsx(s,{name:"upload",label:"Upload Images",message:"This is a message",children:e.jsx(r,{...a})})})},d={args:{name:"upload",maxSize:5*1024*1024,buttonText:"Choose Files",dragText:"Drag and drop files here (max 5MB)"},render:a=>e.jsx(n,{children:e.jsx(s,{name:"upload",label:"Upload Files",message:"This is a message",children:e.jsx(r,{...a})})})},p={args:{name:"upload",required:!0,buttonText:"Choose Files",dragText:"Drag and drop files here"},render:a=>e.jsx(n,{children:e.jsx(s,{name:"upload",label:"Upload Files",message:"This is a message",children:e.jsx(r,{...a})})})},m={args:{name:"upload",disabled:!0,buttonText:"Choose Files",dragText:"Drag and drop files here"},render:a=>e.jsx(n,{children:e.jsx(s,{name:"upload",label:"Upload Files",message:"This is a message",children:e.jsx(r,{...a})})})},i={args:{name:"upload",status:"error",buttonText:"Choose Files",dragText:"Drag and drop files here"},render:a=>e.jsx(n,{children:e.jsx(s,{name:"upload",label:"Upload Files",message:"This is a message",status:"error",children:e.jsx(r,{...a})})})},u={render:()=>e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(s,{name:"small",label:"Small Upload",children:e.jsx(r,{name:"small",size:"small",buttonText:"Choose Files",dragText:"Drag and drop files here"})}),e.jsx(s,{name:"medium",label:"Medium Upload",children:e.jsx(r,{name:"medium",size:"medium",buttonText:"Choose Files",dragText:"Drag and drop files here"})}),e.jsx(s,{name:"large",label:"Large Upload",children:e.jsx(r,{name:"large",size:"large",buttonText:"Choose Files",dragText:"Drag and drop files here"})})]})})};var g,x,c;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'upload',
    buttonText: 'Choose Files',
    dragText: 'Drag and drop files here'
  },
  render: args => <InputWrapper>
            <FormItem name='upload' label='Upload Files' message='This is a message'>
                <InputUpload {...args} helperText='This is a helper text' />
            </FormItem>
        </InputWrapper>
}`,...(c=(x=o.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};var h,F,T;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'upload',
    multiple: true,
    maxFiles: 3,
    buttonText: 'Choose Files',
    dragText: 'Drag and drop up to 3 files here'
  },
  render: args => <InputWrapper>
            <FormItem name='upload' label='Upload Files' message='This is a message'>
                <InputUpload {...args} />
            </FormItem>
        </InputWrapper>
}`,...(T=(F=l.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var I,b,j;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'upload',
    accept: 'image/*',
    buttonText: 'Choose Images',
    dragText: 'Drag and drop images here'
  },
  render: args => <InputWrapper>
            <FormItem name='upload' label='Upload Images' message='This is a message'>
                <InputUpload {...args} />
            </FormItem>
        </InputWrapper>
}`,...(j=(b=t.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var f,U,D;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'upload',
    maxSize: 5 * 1024 * 1024,
    // 5MB
    buttonText: 'Choose Files',
    dragText: 'Drag and drop files here (max 5MB)'
  },
  render: args => <InputWrapper>
            <FormItem name='upload' label='Upload Files' message='This is a message'>
                <InputUpload {...args} />
            </FormItem>
        </InputWrapper>
}`,...(D=(U=d.parameters)==null?void 0:U.docs)==null?void 0:D.source}}};var C,W,S;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'upload',
    required: true,
    buttonText: 'Choose Files',
    dragText: 'Drag and drop files here'
  },
  render: args => <InputWrapper>
            <FormItem name='upload' label='Upload Files' message='This is a message'>
                <InputUpload {...args} />
            </FormItem>
        </InputWrapper>
}`,...(S=(W=p.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var z,M,y;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'upload',
    disabled: true,
    buttonText: 'Choose Files',
    dragText: 'Drag and drop files here'
  },
  render: args => <InputWrapper>
            <FormItem name='upload' label='Upload Files' message='This is a message'>
                <InputUpload {...args} />
            </FormItem>
        </InputWrapper>
}`,...(y=(M=m.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var q,v,E;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'upload',
    status: 'error',
    buttonText: 'Choose Files',
    dragText: 'Drag and drop files here'
  },
  render: args => <InputWrapper>
            <FormItem name='upload' label='Upload Files' message='This is a message' status='error'>
                <InputUpload {...args} />
            </FormItem>
        </InputWrapper>
}`,...(E=(v=i.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var B,O,R;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <InputWrapper>
            <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
                <FormItem name='small' label='Small Upload'>
                    <InputUpload name='small' size='small' buttonText='Choose Files' dragText='Drag and drop files here' />
                </FormItem>
                <FormItem name='medium' label='Medium Upload'>
                    <InputUpload name='medium' size='medium' buttonText='Choose Files' dragText='Drag and drop files here' />
                </FormItem>
                <FormItem name='large' label='Large Upload'>
                    <InputUpload name='large' size='large' buttonText='Choose Files' dragText='Drag and drop files here' />
                </FormItem>
            </div>
        </InputWrapper>
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const K=["Default","MultipleFiles","ImageOnly","WithMaxSize","Required","Disabled","Error","DifferentSizes"];export{o as Default,u as DifferentSizes,m as Disabled,i as Error,t as ImageOnly,l as MultipleFiles,p as Required,d as WithMaxSize,K as __namedExportsOrder,J as default};
