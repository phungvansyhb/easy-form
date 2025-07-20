import{j as e}from"./jsx-runtime-BO8uF4Og.js";import{d as r,F as a,u as L,c as M}from"./index.esm-BP2dX5fD.js";import"./index-D4H_InIO.js";const k={title:"Components/InputPassword",component:r,parameters:{layout:"centered"},tags:["autodocs"]},n=({children:s})=>{const R=L();return e.jsx("div",{style:{width:"360px",padding:"40px"},children:e.jsx(M,{onSubmit:H=>console.log(H),form:R,children:s})})},o={args:{name:"password",placeholder:"Enter your password"},render:s=>e.jsx(n,{children:e.jsx(a,{name:"password",label:"Password",message:"This is a message",children:e.jsx(r,{...s})})})},d={args:{name:"password",placeholder:"Enter your password",showPassword:!0},render:s=>e.jsx(n,{children:e.jsx(a,{name:"password",label:"Password",message:"This is a message",children:e.jsx(r,{...s})})})},m={args:{name:"password",placeholder:"Enter your password",helperText:"Password must be at least 8 characters long"},render:s=>e.jsx(n,{children:e.jsx(a,{name:"password",label:"Password",message:"This is a message",children:e.jsx(r,{...s})})})},p={args:{name:"password",placeholder:"Enter your password",required:!0},render:s=>e.jsx(n,{children:e.jsx(a,{name:"password",label:"Password",message:"This is a message",children:e.jsx(r,{...s})})})},t={args:{name:"password",placeholder:"Enter your password",disabled:!0},render:s=>e.jsx(n,{children:e.jsx(a,{name:"password",label:"Password",message:"This is a message",children:e.jsx(r,{...s})})})},l={args:{name:"password",placeholder:"Enter your password",status:"error"},render:s=>e.jsx(n,{children:e.jsx(a,{name:"password",label:"Password",message:"This is a message",status:"error",children:e.jsx(r,{...s})})})},i={render:()=>e.jsx(n,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(a,{name:"small",label:"Small Password",children:e.jsx(r,{name:"small",placeholder:"Enter your password",size:"small"})}),e.jsx(a,{name:"medium",label:"Medium Password",children:e.jsx(r,{name:"medium",placeholder:"Enter your password",size:"medium"})}),e.jsx(a,{name:"large",label:"Large Password",children:e.jsx(r,{name:"large",placeholder:"Enter your password",size:"large"})})]})})};var c,u,w;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'password',
    placeholder: 'Enter your password'
  },
  render: args => <InputWrapper>
            <FormItem name='password' label='Password' message='This is a message'>
                <InputPassword {...args} />
            </FormItem>
        </InputWrapper>
}`,...(w=(u=o.parameters)==null?void 0:u.docs)==null?void 0:w.source}}};var g,h,I;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'password',
    placeholder: 'Enter your password',
    showPassword: true
  },
  render: args => <InputWrapper>
            <FormItem name='password' label='Password' message='This is a message'>
                <InputPassword {...args} />
            </FormItem>
        </InputWrapper>
}`,...(I=(h=d.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var x,P,j;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'password',
    placeholder: 'Enter your password',
    helperText: 'Password must be at least 8 characters long'
  },
  render: args => <InputWrapper>
            <FormItem name='password' label='Password' message='This is a message'>
                <InputPassword {...args} />
            </FormItem>
        </InputWrapper>
}`,...(j=(P=m.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var b,y,E;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'password',
    placeholder: 'Enter your password',
    required: true
  },
  render: args => <InputWrapper>
            <FormItem name='password' label='Password' message='This is a message'>
                <InputPassword {...args} />
            </FormItem>
        </InputWrapper>
}`,...(E=(y=p.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var F,W,T;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    name: 'password',
    placeholder: 'Enter your password',
    disabled: true
  },
  render: args => <InputWrapper>
            <FormItem name='password' label='Password' message='This is a message'>
                <InputPassword {...args} />
            </FormItem>
        </InputWrapper>
}`,...(T=(W=t.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var f,S,z;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'password',
    placeholder: 'Enter your password',
    status: 'error'
  },
  render: args => <InputWrapper>
            <FormItem name='password' label='Password' message='This is a message' status='error'>
                <InputPassword {...args} />
            </FormItem>
        </InputWrapper>
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var D,q,v;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <InputWrapper>
            <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
                <FormItem name='small' label='Small Password'>
                    <InputPassword name='small' placeholder='Enter your password' size='small' />
                </FormItem>
                <FormItem name='medium' label='Medium Password'>
                    <InputPassword name='medium' placeholder='Enter your password' size='medium' />
                </FormItem>
                <FormItem name='large' label='Large Password'>
                    <InputPassword name='large' placeholder='Enter your password' size='large' />
                </FormItem>
            </div>
        </InputWrapper>
}`,...(v=(q=i.parameters)==null?void 0:q.docs)==null?void 0:v.source}}};const A=["Default","WithInitialShowPassword","WithHelperText","Required","Disabled","Error","DifferentSizes"];export{o as Default,i as DifferentSizes,t as Disabled,l as Error,p as Required,m as WithHelperText,d as WithInitialShowPassword,A as __namedExportsOrder,k as default};
