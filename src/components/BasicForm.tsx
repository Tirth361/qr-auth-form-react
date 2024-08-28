import { Button, Divider, Group, Paper, PasswordInput, Stack, TextInput, Text, PaperProps, MantineProvider } from "@mantine/core";
import { useForm } from "@mantine/form";
import { GoogleButton } from "../icons/GoogleButton";
import { TwitterButton } from "../icons/TwitterButton";
import './InputValidation.css';

const BasicForm: React.FC = (props: PaperProps) => {

    const form = useForm({
        initialValues: {
            email: '',
            name: '',
            password: ''
        },

        validate: {
            email: (val) => (/^\S+@\S+$/.test(val) ? null : 'Invalid email'),
            password: (val) => (val.length <= 6 ? 'Password should include at least 6 characters' : null),
            name: (val) => (!val ? 'Name is Required' : null)
        },
    });

    const handleSubmit = (values: typeof form.values) => {
        console.log(values);
    };

    return (
        <>
            <MantineProvider>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Paper radius="md" p="xl" withBorder {...props}>
                        <Text size="lg" fw={500}>
                            QR Form
                        </Text>

                        <Group grow mb="md" mt="md">
                            <GoogleButton radius="xl">Google</GoogleButton>
                            <TwitterButton radius="xl">Twitter</TwitterButton>
                        </Group>

                        <Divider label="Or continue with email" labelPosition="center" my="lg" />

                        <form onSubmit={form.onSubmit(handleSubmit)}>
                            <Stack>
                                <TextInput
                                    required
                                    label="Name"
                                    placeholder="Your name"
                                    value={form.values.name}
                                    onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                                    radius="md"
                                    classNames={{ input: 'invalid' }}
                                />

                                <TextInput
                                    required
                                    label="Email"
                                    placeholder="hello@test.com"
                                    value={form.values.email}
                                    onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                                    error={form.errors.email && 'Invalid email'}
                                    radius="md"
                                />

                                <PasswordInput
                                    required
                                    label="Password"
                                    placeholder="Your password"
                                    value={form.values.password}
                                    onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
                                    error={form.errors.password && 'Password should include at least 6 characters'}
                                    radius="md"
                                />
                            </Stack>

                            <Group justify="flex-end" mt="xl">
                                <Button variant='outline' type="reset" radius="xl">
                                    Reset
                                </Button>
                                <Button type="submit" radius="xl">
                                    Save
                                </Button>
                            </Group>
                        </form>
                    </Paper>
                </div>
            </MantineProvider>
        </>
    )
}

export default BasicForm;